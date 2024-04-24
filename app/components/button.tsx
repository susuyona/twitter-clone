"use client";

 // @ts-ignore
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

interface ButtonProps {
  text: string;
}

export default function FormButton({text}: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button 
      disabled={pending} 
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:neutral-300 
      disabled:cursor-not-allowed"
    >
      {pending? "Loading..." :text}
    </button>
  );
}