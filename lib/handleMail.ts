import emailjs from "@emailjs/browser";

export const handleMail = async (form: any) => {
  try {
    if (
      process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY
    ) {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_MAILJS_PUBLIC_KEY
      );
    }
  } catch (error) {
    console.log(`Something went wrong. Try again`);
  }
};
