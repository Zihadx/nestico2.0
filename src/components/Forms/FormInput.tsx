"use client";

import { useField } from "formik";

interface FormInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export default function FormInput({ name, type = "text", placeholder, className }: FormInputProps) {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col">
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={`bg-white/5 border-white/20 text-white placeholder:text-slate-400 rounded-xl p-3 focus:ring-2 focus:ring-cyan-400 ${className}`}
      />
      {meta.touched && meta.error && (
        <p className="text-red-400 text-sm mt-1">{meta.error}</p>
      )}
    </div>
  );
}
