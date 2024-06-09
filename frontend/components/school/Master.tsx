import Link from "next/link";

import Typography from "@mui/material/Typography";

import Heading from "../ui/Heading";

const Master = () => {
  return (
    <div>
      <Heading label="大学院" />
      <div className="flex flex-col gap-4">
        <div>
          <Heading label="社会情報学研究科" h2 />
          <Typography className="w-11/12 md:w-3/4 mx-auto break-words whitespace-normal">
            青山学院大学の社会情報学研究科に進学する予定です。
            社会情報学研究科は「多角的な視点から現代の問題を発見し、それらを自分の力で解決できる高度な人材」の育成を目的とした研究科です（
            <Link href="https://www.aoyama.ac.jp/faculty/graduate_ssi/dsi/ssi/" target="_blank" className="text-blue-500">
              青山学院大学ホームページ
            </Link>
            より）。
            私も、高い情報技術に加え、ビジネスに関する素養ももったエンジニアになることを目指しています。
          </Typography>
        </div>
        <div>
          <Heading label="1年修了" h2 />
          <Typography className="w-11/12 md:w-3/4 mx-auto">
            社会情報学研究科には研究業績や取得単位数などの条件を満たすことで、修士課程を2年ではなく1年で修了できる制度があり、私も1年修了を目指しています。
            そのために学部4年次から大学院の授業を履修しており、修士研究も学部4年次から開始しております。
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Master;
