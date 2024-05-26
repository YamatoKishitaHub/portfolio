import type { Metadata } from "next";

import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
};

const page = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default page;
