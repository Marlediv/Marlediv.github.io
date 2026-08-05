"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { siteConfig } from "@/content/site-config";
import { Label, Input, Textarea, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

type SubmitState = { status: "idle" | "success" };

// GitHub Pages liefert nur statische Dateien aus, ein serverseitiger
// Formularversand (`/api/contact`) steht dort nicht zur Verfügung. Das
// Formular öffnet daher das E-Mail-Programm der Nutzerin/des Nutzers mit
// vorausgefüllter Nachricht (mailto:), statt Daten an einen Server zu senden.
function buildMailtoUrl(values: ContactFormValues) {
  const subject = `[Portfolio] ${values.subject}`;
  const body = [
    `Name: ${values.name}`,
    `E-Mail: ${values.email}`,
    values.company ? `Unternehmen: ${values.company}` : null,
    "",
    values.message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", company: "", subject: "", message: "", website: "" },
  });

  function onSubmit(values: ContactFormValues) {
    // Honeypot: Bots, die das Feld ausfüllen, scheitern bereits an der Zod-Validierung.
    window.location.assign(buildMailtoUrl(values));
    setSubmitState({ status: "success" });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot-Feld: für Menschen unsichtbar, Bots füllen es häufig aus */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name} />
          <FieldError>{errors.name?.message}</FieldError>
        </div>
        <div>
          <Label htmlFor="email">E-Mail</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email} />
          <FieldError>{errors.email?.message}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="company">Unternehmen (optional)</Label>
        <Input id="company" autoComplete="organization" {...register("company")} />
      </div>

      <div>
        <Label htmlFor="subject">Betreff</Label>
        <Input id="subject" {...register("subject")} aria-invalid={!!errors.subject} />
        <FieldError>{errors.subject?.message}</FieldError>
      </div>

      <div>
        <Label htmlFor="message">Nachricht</Label>
        <Textarea id="message" {...register("message")} aria-invalid={!!errors.message} />
        <FieldError>{errors.message?.message}</FieldError>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Nachricht senden
      </Button>

      {submitState.status === "success" && (
        <p role="status" className="flex items-start gap-2 rounded-[var(--radius-sm)] border border-success/30 bg-success/10 p-4 text-sm text-foreground">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-success" />
          Ihr E-Mail-Programm öffnet sich mit einer vorausgefüllten Nachricht. Falls nicht, schreiben Sie mir
          gerne direkt an {siteConfig.email}.
        </p>
      )}
    </form>
  );
}
