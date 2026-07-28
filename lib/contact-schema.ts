import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen ein.").max(100),
  email: z.string().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  company: z.string().max(100).optional().or(z.literal("")),
  subject: z.string().min(3, "Bitte gib einen Betreff ein.").max(150),
  message: z.string().min(10, "Deine Nachricht sollte mindestens 10 Zeichen enthalten.").max(5000),
  // Honeypot-Feld: darf niemals ausgefüllt sein. Bots füllen es häufig automatisch aus.
  website: z.string().max(0, "Spam erkannt.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
