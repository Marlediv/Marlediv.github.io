"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { Label, Input, Textarea, FieldError } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

type SubmitState = { status: "idle" | "loading" | "success" | "error"; message?: string };

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

  async function onSubmit(values: ContactFormValues) {
    setSubmitState({ status: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setSubmitState({
          status: "error",
          message: data.message ?? "Die Nachricht konnte nicht gesendet werden.",
        });
        return;
      }

      setSubmitState({
        status: "success",
        message: data.dev
          ? data.message
          : "Danke für deine Nachricht! Ich melde mich so schnell wie möglich zurück.",
      });
      reset();
    } catch {
      setSubmitState({ status: "error", message: "Es gab ein Verbindungsproblem. Bitte versuche es erneut." });
    }
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

      <Button type="submit" size="lg" disabled={submitState.status === "loading"} className="w-full sm:w-auto">
        {submitState.status === "loading" && <Loader2 size={16} className="animate-spin" />}
        Nachricht senden
      </Button>

      {submitState.status === "success" && (
        <p role="status" className="flex items-start gap-2 rounded-[var(--radius-sm)] border border-success/30 bg-success/10 p-4 text-sm text-foreground">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-success" />
          {submitState.message}
        </p>
      )}

      {submitState.status === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-[var(--radius-sm)] border border-danger/30 bg-danger/10 p-4 text-sm text-foreground">
          <AlertCircle size={18} className="mt-0.5 shrink-0 text-danger" />
          {submitState.message}
        </p>
      )}
    </form>
  );
}
