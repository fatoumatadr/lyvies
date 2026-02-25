// ══════════════════════════════════════════════
// LYVIES — Form Input
// Champ de formulaire avec label flottant
// ══════════════════════════════════════════════

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "number" | "textarea" | "select";
  options?: { value: string; label: string }[];
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export default function FormInput({
  label,
  name,
  type = "text",
  options,
  required = false,
  placeholder = "",
  rows = 4,
}: FormInputProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const baseClasses = `
    w-full bg-transparent border-b border-cacao/15
    text-charbon font-jost font-light text-body-md
    py-4 px-0 outline-none transition-all duration-500
    focus:border-cacao placeholder:text-transparent
    focus:placeholder:text-charbon/25
  `;

  const labelActive = focused || hasValue;

  return (
    <div className="relative group">
      {/* Label flottant */}
      <motion.label
        htmlFor={name}
        animate={{
          y: labelActive ? -28 : 0,
          fontSize: labelActive ? "0.65rem" : "0.9rem",
          color: labelActive ? "#3B2218" : "#B8A99A",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-4 pointer-events-none uppercase tracking-[0.2em] font-jost font-medium"
      >
        {label} {required && <span className="text-cacao">*</span>}
      </motion.label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className={`${baseClasses} resize-none`}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
        />
      ) : type === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          className={`${baseClasses} cursor-pointer appearance-none`}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
          defaultValue=""
        >
          <option value="" disabled hidden />
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-sable text-charbon">
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClasses}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            setHasValue(e.target.value.length > 0);
          }}
        />
      )}

      {/* Ligne active animée */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-cacao origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Flèche select */}
      {type === "select" && (
        <div className="absolute right-0 top-4 pointer-events-none text-charbon/50">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      )}
    </div>
  );
}
