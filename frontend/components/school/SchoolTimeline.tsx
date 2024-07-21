import { FaSchool } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";

import Heading from "../ui/Heading";
import MyTimeline from "../ui/MyTimeline";
import { TimelineItemType } from "@/types/timeline";

const SchoolTimeline = () => {
  const timelineItems: TimelineItemType[] = [
    {
      date: "2021.04",
      title: "青山学院大学 社会情報学部 社会情報学科 入学",
      text: "社会・情報コース（3年次から）",
      icon: <FaSchool />,
      iconColor: "primary",
    },
    {
      date: "2022.07",
      title: "2022年度 学業成績優秀者表彰 奨励賞受賞",
      titleHref: "https://ac.cdn-aoyamagakuin.com/wp-content/uploads/2022/07/HP%E6%8E%B2%E8%BC%89%E7%94%A82022%E5%B9%B4%E5%BA%A6%E5%8F%97%E8%B3%9E%E8%80%85%E4%B8%80%E8%A6%A7-1.pdf",
      icon: <FaTrophy />,
      iconColor: "grey",
    },
    {
      date: "2023.07",
      title: "2023年度 学業成績優秀者表彰 優秀賞受賞",
      titleHref: "https://ac.cdn-aoyamagakuin.com/wp-content/uploads/2023/07/prize_gakugyou_-seiseki2023.pdf",
      icon: <FaTrophy />,
      iconColor: "grey",
    },
    {
      date: "2024.07",
      title: "2024年度 学業成績優秀者表彰 最優秀賞受賞",
      titleHref: "https://www.aoyama.ac.jp/wp-content/uploads/2024/07/prize_gakugyou_-seiseki2024.pdf",
      icon: <FaTrophy />,
      iconColor: "grey",
    },
    {
      date: "2025.03",
      title: "青山学院大学 社会情報学部 社会情報学科 卒業",
      text: "学士（学術） 見込み",
      icon: <RiGraduationCapFill />,
      iconColor: "primary",
    },
    {
      date: "2025.04",
      title: "青山学院大学 社会情報学研究科 入学",
      text: "社会情報学専攻 社会情報学コース",
      icon: <FaSchool />,
      iconColor: "primary",
    },
    {
      date: "2026.03",
      title: "青山学院大学 社会情報学研究科 修了",
      text: "修士（学術） 1年修了予定",
      icon: <RiGraduationCapFill />,
      iconColor: "primary",
    },
  ];

  return (
    <div>
      <Heading label="年表" />
      <MyTimeline timelineItems={timelineItems} flexValue={0.6} />
    </div>
  );
};

export default SchoolTimeline;
