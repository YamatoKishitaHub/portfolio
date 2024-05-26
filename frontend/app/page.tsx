import dynamic from "next/dynamic";

import SelfIntroduction from "@/components/root/SelfIntroduction";

const News = dynamic(() => import("@/components/root/News"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <SelfIntroduction />
      <News />
    </div>
  );
}
