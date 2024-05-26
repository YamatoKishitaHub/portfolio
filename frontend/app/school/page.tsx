import { Metadata } from "next";

import SchoolTimeline from "@/components/school/SchoolTimeline";
import Bachelor from "@/components/school/Bachelor";
import Master from "@/components/school/Master";

export const metadata: Metadata = {
  title: "大学・大学院",
};

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <SchoolTimeline />
      <Bachelor />
      <Master />
    </div>
  );
};

export default page;
