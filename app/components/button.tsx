"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({text}: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button 
      disabled={pending} 
      className="primary-btn px-2 py-1 disabled:bg-neutral-400 disabled:neutral-300 
      disabled:cursor-not-allowed"
    >
      {pending? "Loading..." :text}
    </button>
  );
}