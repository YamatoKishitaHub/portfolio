import { Metadata } from "next";

import Qualification from "@/components/skill/Qualification";
import Programming from "@/components/skill/Programming";

export const metadata: Metadata = {
  title: "スキル",
};

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Qualification />
      <Programming />
    </div>
  );
};

export default page;
