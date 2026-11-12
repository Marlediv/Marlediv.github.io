import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein.").max(100),
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  company: z.string().max(100).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Bitte geben Sie einen Betreff ein.").max(150),
  message: z.string().trim().min(10, "Die Nachricht sollte mindestens 10 Zeichen enthalten.").max(5000),
  // Honeypot-Feld: darf niemals ausgefüllt sein. Bots füllen es häufig automatisch aus.
  website: z.string().max(0, "Spam erkannt.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
