"use client";

import { useState } from "react";
import { contactHref } from "@/data/site-config";

const options = ["Pista LED", "Pantalla gigante LED", "Aros", "Cuadrilátero", "Sonido", "Todavía no sé"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-4 border border-white/10 bg-black/28 p-4 md:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const includes = formData.getAll("includes").join(", ") || "No especificado";
        const message = [
          "Hola Chirola Disco, quiero consultar por una fecha.",
          `Nombre: ${formData.get("name") ?? ""}`,
          `Teléfono: ${formData.get("phone") ?? ""}`,
          `Fecha: ${formData.get("date") || "No especificada"}`,
          `Salón / localidad: ${formData.get("venue") || "No especificado"}`,
          `Me interesa: ${includes}`,
          `Mensaje: ${formData.get("message") || "Sin mensaje adicional"}`,
        ].join("\n");

        setSubmitted(true);
        window.location.href = contactHref(message);
      }}
      aria-label="Formulario de cotización"
    >
      <p className="text-sm text-neutral-400">Completá lo mínimo y se abre tu app de contacto con la consulta lista. Revisá el mensaje antes de enviarlo.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-neutral-300">Nombre<input required name="name" autoComplete="name" className="border border-white/15 bg-white/[0.04] px-4 py-4 text-white placeholder:text-neutral-500" /></label>
        <label className="grid gap-2 text-sm text-neutral-300">Teléfono<input required name="phone" type="tel" autoComplete="tel" inputMode="tel" className="border border-white/15 bg-white/[0.04] px-4 py-4 text-white placeholder:text-neutral-500" /></label>
        <label className="grid gap-2 text-sm text-neutral-300">Fecha del evento<input name="date" autoComplete="off" className="border border-white/15 bg-white/[0.04] px-4 py-4 text-white placeholder:text-neutral-500" /></label>
        <label className="grid gap-2 text-sm text-neutral-300">Salón / localidad<input name="venue" className="border border-white/15 bg-white/[0.04] px-4 py-4 text-white placeholder:text-neutral-500" /></label>
      </div>
      <fieldset className="grid gap-3 border border-white/10 p-4">
        <legend className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">Qué te gustaría incluir</legend>
        <div className="flex flex-wrap gap-3">
          {options.map((option) => (
            <label key={option} className="flex items-center gap-2 border border-white/10 px-3 py-2 text-sm text-neutral-300">
              <input type="checkbox" name="includes" value={option} />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-sm text-neutral-300">Qué te gustaría que tenga la fiesta?<textarea name="message" rows={3} className="border border-white/15 bg-white/[0.04] px-4 py-4 text-white placeholder:text-neutral-500" /></label>
      <button className="border border-[var(--accent)] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)] transition hover:bg-[var(--accent)] hover:text-black" data-analytics="quote_form_submit">
        Preparar consulta
      </button>
      <p className="text-xs text-neutral-500" aria-live="polite">{submitted ? "Se abrió WhatsApp con la consulta preparada." : "Al tocar enviar se abre WhatsApp con tu consulta lista para mandar."}</p>
    </form>
  );
}
