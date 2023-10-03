"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function SubmitBtn({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      {text}
    </button>
  );
}
