import { Metadata } from "next";

import BachelorResearch from "@/components/research/BachelorResearch";

export const metadata: Metadata = {
  title: "研究",
};

const page = () => {
  return (
    <div>
      <BachelorResearch />
    </div>
  );
};

export default page;
