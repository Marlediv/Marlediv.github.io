import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Ungültige Anfrage." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Bitte überprüfe deine Eingaben.", errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Honeypot: Wenn befüllt, stillschweigend als erfolgreich quittieren (kein Hinweis an Bots).
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, company, subject, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    // Entwicklungsmodus ohne konfigurierten E-Mail-Versand: verständliche Meldung statt Fehler.
    console.info("[Kontaktformular] Kein RESEND_API_KEY/CONTACT_EMAIL gesetzt – Nachricht nur geloggt:", {
      name,
      email,
      company,
      subject,
      message,
    });
    return NextResponse.json({
      ok: true,
      dev: true,
      message:
        "E-Mail-Versand ist lokal nicht konfiguriert (RESEND_API_KEY/CONTACT_EMAIL fehlen). Die Nachricht wurde nur in der Konsole protokolliert.",
    });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio Kontaktformular <onboarding@resend.dev>",
      to: contactEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company || "-"}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Kontaktformular] Versand fehlgeschlagen:", error);
    return NextResponse.json(
      { ok: false, message: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut." },
      { status: 502 },
    );
  }
}
