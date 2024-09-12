import Image from "next/image";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import { RiPresentationFill } from "react-icons/ri";
import { RiNewspaperFill } from "react-icons/ri";

import Heading from "../ui/Heading";
import MyTimeline from "../ui/MyTimeline";
import { TimelineItemType } from "@/types/timeline";

const BachelorResearch = () => {
  const conferenceTimelineItems: TimelineItemType[] = [
    {
      date: "2023.09",
      title: "第22回 2023年度 情報処理学会関西支部 支部大会",
      text: "奨励賞受賞",
      textHref: "https://kansai.ipsj.or.jp/record/",
      icon: <RiPresentationFill />,
      iconColor: "primary",
    },
    {
      date: "2024.03",
      title: "第16回データ工学と情報マネジメントに関するフォーラム（DEIM 2024）",
      icon: <RiPresentationFill />,
      iconColor: "primary",
    },
    {
      date: "2024.08",
      title: "第17回全国高等学校情報教育研究会全国大会（愛知大会）",
      icon: <RiPresentationFill />,
      iconColor: "primary",
    },
    {
      date: "2024.09",
      title: "The 13th International Workshop on Web Services and Social Media (WSSM-2024)",
      text: "In conjunction with The 27th International Conference on Network-Based Information Systems (NBiS-2024)",
      icon: <RiPresentationFill />,
      iconColor: "primary",
    },
  ];

  const paperTimelineItems: TimelineItemType[] = [
    {
      date: "2023.09",
      title: "木下 倭，高橋伶奈，伊藤 一成：ピクタグラミング −ピクトグラムの作成を通じたマークアップ言語学習アプリケーションの試作−，2023年度情報処理学会関西支部支部大会， (2023.09.24)",
      titleHref: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=228385&item_no=1&page_id=13&block_id=8",
      icon: <RiNewspaperFill />,
      iconColor: "primary",
    },
    {
      date: "2024.03",
      title: "木下 倭，高橋伶奈，伊藤一成：ピクタグラミング −ピクトグラムの作成を通じたマークアップ言語・スタイルシート言語学習アプリケーションの開発とその評価−，第16回データ工学と情報マネジメントに関するフォーラム（DEIM2024），(2024.03)",
      titleHref: "https://confit.atlas.jp/guide/event-img/deim2024/T5-A-3-02/public/pdf?type=in",
      icon: <RiNewspaperFill />,
      iconColor: "primary",
    },
    {
      date: "2024.03",
      title: "Yamato Kishita, Mikihiro Ishii, Kazunari Ito: A Proposal of Application for Learning about Document Structuring and Styling through Pictogram Content Creation. The 13th International Workshop on Web Services and Social Media (WSSM-2024). (2024.09)",
      titleHref: "",
      icon: <RiNewspaperFill />,
      iconColor: "primary",
    },
  ];

  const presentationAndPosterTimelineItems: TimelineItemType[] = [
    {
      date: "2023.09",
      title: "2023年度情報処理学会関西支部支部大会 プレゼンテーションスライド",
      titleHref: "/research/ipsj_kansaishibu2023_presentation.pdf",
      icon: <RiPresentationFill />,
      iconColor: "primary",
    },
    {
      date: "2024.03",
      title: "第16回データ工学と情報マネジメントに関するフォーラム（DEIM2024） プレゼンテーションスライド",
      titleHref: "/research/deim2024_presentation.pdf",
      icon: <RiPresentationFill />,
      iconColor: "primary",
    },
    {
      date: "2024.03",
      title: "第16回データ工学と情報マネジメントに関するフォーラム（DEIM2024） ポスター",
      titleHref: "/research/deim2024_poster.pdf",
      icon: <RiPresentationFill />,
      iconColor: "primary",
    },
    {
      date: "2024.08",
      title: "第17回全国高等学校情報教育研究会全国大会（愛知大会） ポスター",
      titleHref: "/research/zenkojoken2024_poster.pdf",
      icon: <RiPresentationFill />,
      iconColor: "primary",
    },
  ];

  return (
    <div>
      <Heading label="卒業研究" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Heading label="ピクタグラミング" h2 />
          <Typography className="w-11/12 md:w-3/4 mx-auto">
            青山学院大学社会情報学部の
            <Link href="https://kazunari.org/" target="_blank" className="text-blue-500">
              伊藤一成研究室
            </Link>
            で、情報教育に関する研究をしています。
          </Typography>
          <Typography className="w-11/12 md:w-3/4 mx-auto">
            高等学校必履修科目「情報I」の「コミュニケーションと情報デザイン」の分野では、マークアップ言語HTMLとスタイルシート言語CSSを用いたWebコンテンツ制作実習が想定されます。
            ですが、初学者にとってはHTMLとCSSの仕様は膨大であり、習得には時間がかかります。
            十分な学習時間を確保できない初学者にとっては、HTMLとCSSの記法の理解に加え、良いデザインのものを作るのは容易ではありません。
            そこで、ピクトグラムに着目して、短時間で楽しいWebコンテンツ制作実習を可能にするアプリケーションを開発しようと考えました。
          </Typography>
          <Typography className="w-11/12 md:w-3/4 mx-auto">
            そのアプリケーションが
            <Link href="https://pictogramming.org/apps/pictagramming" target="_blank" className="text-blue-500 break-words whitespace-normal">
              ピクタグラミング
            </Link>
            です。
            ピクタグラミングは、ピクトグラムの作成を通じて、マークアップ言語とスタイルシート言語の記法について学習できるアプリケーションです。
            ピクタグラミングという名称は、ピクトグラムと（マークアップ言語の）タグを組み合わせた造語です。
            インターネット上で公開しており、どなたでも利用可能です。
          </Typography>
          <Link href="https://pictogramming.org/apps/pictagramming/?code=%3Cdiv%20id%3D%22wrapper%22%3E%0A%20%20%3Ch1%3ECAUTION%3C%2Fh1%3E%0A%0A%20%20%3Cpa%20type%3D%22a%22%20scale%3D%220.7%22%3E%0A%20%20%20%20%3Chp%20x%3D%2220%22%20y%3D%2230%22%20scale%3D%220.6%22%20body%3D%2260%22%20lua%3D%22-120%22%20lla%3D%2245%22%20rua%3D%2245%22%20rla%3D%2290%22%20lul%3D%2220%22%20lll%3D%22-60%22%20rul%3D%2245%22%20rll%3D%22-60%22%20color%3D%22%23222325%22%20orientation%3D%22front%22%3E%3C%2Fhp%3E%0A%20%20%20%20%3Cline%20x1%3D%22-160%22%20y1%3D%22150%22%20x2%3D%2280%22%20y2%3D%22150%22%20width%3D%2220%22%20color%3D%22%23222325%22%3E%3C%2Fline%3E%0A%20%20%20%20%3Cline%20x1%3D%2280%22%20y1%3D%22140%22%20x2%3D%2280%22%20y2%3D%22210%22%20width%3D%2220%22%20color%3D%22%23222325%22%3E%3C%2Fline%3E%0A%20%20%20%20%3Cline%20x1%3D%2280%22%20y1%3D%22200%22%20x2%3D%22160%22%20y2%3D%22200%22%20width%3D%2220%22%20color%3D%22%23222325%22%3E%3C%2Fline%3E%0A%20%20%3C%2Fpa%3E%0A%0A%20%20%3Cdiv%20class%3D%22message%22%3E%0A%20%20%20%20%3Cdiv%3EWatch%20your%20step!%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%3E%E3%81%8A%E8%B6%B3%E5%85%83%E3%81%AB%E3%81%8A%E6%B0%97%E3%82%92%E3%81%A4%E3%81%91%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%3Cstyle%3E%0Adiv%23wrapper%20%7B%0A%20%20text-align%3A%20center%3B%0A%20%20background-color%3A%20rgb(236%2C%20199%2C%200%2C%200.9)%3B%0A%7D%0Ah1%20%7B%0A%20%20margin%3A%200%20auto%20-10px%3B%0A%20%20background-color%3A%20rgb(34%2C%2035%2C%2037)%3B%0A%20%20color%3A%20rgb(236%2C%20199%2C%200%2C%200.9)%3B%0A%20%20font-size%3A%2062px%3B%0A%7D%0Adiv.message%20%7B%0A%20%20margin-top%3A%20-20px%3B%0A%20%20font-size%3A%2038px%3B%0A%20%20font-weight%3A%20bold%3B%0A%7D%0Adiv.message%20div%3Afirst-child%20%7B%0A%20%20font-size%3A%2048px%3B%0A%7D%0A%3C%2Fstyle%3E&workName=Watch%20your%20step!" target="_blank" className="w-3/4 lg:w-3/5 mx-auto my-4">
            <Image src="/research/pictagramming.png" width={1200} height={300} alt="Pictagramming" className="border border-slate-900" />
          </Link>
          <Typography className="w-11/12 md:w-3/4 mx-auto">
            ピクタグラミングでは、HPML（Human Pictogram Markup Language）という独自のマークアップ言語を定義しています。
            HPMLを使用することで、ピクトグラムを容易に、短時間で作成することが可能です。
            HPMLの詳細は、ピクタグラミングの
            <Link href="https://pictogramming.org/materials/learning_pictagramming.pdf" target="_blank" className="text-blue-500 break-words whitespace-normal">
              テキスト
            </Link>
            からご覧いただけます。
          </Typography>
          <Typography className="w-11/12 md:w-3/4 mx-auto">
            授業実践も2回実施しており、ユーザビリティを改善する必要があるとわかりましたが、「楽しい」といったお声を多くいただきました。
            授業実践で頂いた意見を元に、どのようにしたらユーザにとって楽しく、使いやすいアプリケーションになるか考え、改善してきました。
          </Typography>
          <Typography className="w-11/12 md:w-3/4 mx-auto">
            ユーザのWeb制作の学習のモチベーションが向上したり、授業を楽しんでもらうことを目標に研究をしてきました。
            大袈裟な気もしますが、この研究を通じて社会貢献について考えることができ、自分も社会に貢献することができると実感しました。
            情報教育に関する研究をしていたことで、将来はエンジニアとして教育に関するシステム開発に携わりたいと思うようにもなりました。
            そのため、今後はエンジニアとして社会に貢献していきたいと考えています。
          </Typography>
        </div>
        <div>
          <Heading label="論文" h2 />
          <MyTimeline timelineItems={paperTimelineItems} flexValue={0.1} />
        </div>
        <div>
          <Heading label="学会等" h2 />
          <MyTimeline timelineItems={conferenceTimelineItems} flexValue={0.35} />
        </div>
        <div>
          <Heading label="プレゼンテーションスライド・ポスター等" h2/>
          <MyTimeline timelineItems={presentationAndPosterTimelineItems} flexValue={0.35} />
        </div>
      </div>
    </div>
  );
};

export default BachelorResearch;
