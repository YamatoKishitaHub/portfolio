"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { FaShop } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";

import Heading from "../ui/Heading";
import MyTimeline from "../ui/MyTimeline";
import { TimelineItemType } from "@/types/timeline";

const bachelorClasses = [
  {
    area: "青山スタンダート科目",
    classes: [
      "キリスト教概論Ⅰ",
      "キリスト教概論Ⅱ",
      "自己理解（個別科目）",
      "現代社会の諸問題（総合科目）",
      "科学・技術の視点（総合科目）",
      "歴史と人間（個別科目）",
      "健康・スポーツ演習",
      "ウェブプログラミング",
      "情報スキルⅠ",
      "ドイツ語Ⅰ（Ａ）－２",
      "ドイツ語Ⅰ（Ｂ）－２",
      "ドイツ語Ⅰ（Ｂ）－１",
      "ドイツ語Ⅰ（Ａ）－１",
      "フレッシャーズ・セミナー",
      "キャリアデザイン・セミナー",
    ],
  },
  {
    area: "外国語科目",
    classes: [
      "Ｉｎｔｅｇｒａｔｅｄ　ＥｎｇｌｉｓｈⅡ",
      "Ｉｎｔｅｇｒａｔｅｄ　ＥｎｇｌｉｓｈⅠ",
      "Ｔｅｓｔ－Ｔａｋｉｎｇ　ＳｋｉｌｌｓⅠ",
      "Ｔｅｓｔ－Ｔａｋｉｎｇ　ＳｋｉｌｌｓⅡ",
      "Ｃｕｒｒｅｎｔ　Ｅｎｇｌｉｓｈ",
    ],
  },
  {
    area: "コア科目",
    classes: [
      "社会科学概論",
      "コミュニケーション基礎",
      "情報科学概論",
      "統計入門",
      "人間科学概論",
      "社会情報特別講義",
      "社会情報体験演習",
      "コンピューティング実習",
    ],
  },
  {
    area: "基礎科目",
    classes: [
      "数理情報Ⅰ",
      "プログラミング基礎",
      "確率統計Ⅰ",
      "プロジェクトマネジメント",
      "社会数理入門Ⅱ",
      "社会数理Ⅰ",
    ],
  },
  {
    area: "演習科目",
    classes: [
      "プロジェクト演習入門Ⅰ",
      "プロジェクト演習入門Ⅱ",
      "ゼミナールⅠ",
      "ゼミナールⅡ",
      "卒業研究Ⅰ",
      "卒業研究Ⅱ",
    ],
  },
  {
    area: "リエゾン科目",
    classes: [
      "数理情報Ⅱ",
      "ヒューマンインタフェース",
      "情報デザイン",
      "システム分析・設計基礎",
      "情報社会論",
      "情報産業論",
      "情報倫理",
    ],
  },
  {
    area: "社会科目",
    classes: [
      "会計学",
      "金融論",
      "環境経済論",
      "マクロ経済学Ⅰ",
    ],
  },
  {
    area: "情報科目",
    classes: [
      "コンピュータネットワーク基礎",
      "ウェブテクノロジー",
      "データ構造とアルゴリズム",
      "情報セキュリティ",
      "情報科学基礎",
      "データベース基礎",
      "コンピュータグラフィックス",
      "離散数学",
      "人工知能基礎",
      "ソフトウェア工学",
      "ウェブテクノロジー演習",
      "システム分析・設計基礎演習",
      "プログラミング基礎演習",
      "情報科学総合演習Ａ",
      "情報科学総合演習Ｂ",
      "プログラミング応用",
      "プログラミング応用演習",
    ],
  },
  {
    area: "専門選択科目",
    classes: [
      "地方行政と産業振興",
    ],
  },
];

const Bachelor = () => {
  // 開いている履修科目を管理し、全てを閉じることができるようにする
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleExpandedItemsChange = (
    event: React.SyntheticEvent,
    itemIds: string[],
  ) => {
    setExpandedItems(itemIds);
  };

  const handleExpandClick = () => {
    setExpandedItems((oldExpanded) =>
      oldExpanded.length === 0
        ? bachelorClasses.map((bachelorClassesGroup) => bachelorClassesGroup.area)
        : [],
    );
  };

  const articlesTimelineItems: TimelineItemType[] = [
    {
      date: "2023.01",
      title: "相模原キャンパス　購買会　チャレンジショップで利益向上へ",
      text: "「プロジェクト演習入門II」という授業にてチャレンジショップを実施した際の記事",
      titleHref: "https://agunewspaper.com/2023/01/28/202301283a/",
      icon: <FaShop />,
      iconColor: "primary",
    },
    {
      date: "2024.02",
      title: "【社会情報学部】角颯真さん、木下倭さん（ともに社会情報学部3年、伊藤一成教授研究室所属）が「情報処理学会関西支部 2023年度支部大会」にて受賞",
      text: "情報処理学会関西支部 支部大会にて奨励賞を受賞した際の記事",
      titleHref: "https://www.aoyama.ac.jp/faculty117/2023/news_20240212_01",
      icon: <FaTrophy />,
      iconColor: "primary",
    },
    {
      date: "2024.07",
      title: "幅広い学びから見つけた打ち込める専門分野。成長の実感は未来の自分への期待に",
      text: "大学のニュースサイトに掲載していただいた記事",
      titleHref: "https://life.a01.aoyama.ac.jp/interview/1690",
      icon: <FaTrophy />,
      iconColor: "primary",
    },
  ];

  return (
    <div>
      <Heading label="大学" />
      <div className="flex flex-col gap-4">
        <div>
          <Heading label="社会情報学部" h2 />
          <div className="flex flex-col gap-4">
            <Typography className="w-11/12 md:w-3/4 mx-auto">
              青山学院大学の社会情報学部は文理融合の学部で、社会・人間・情報の3つの領域を学ぶことができます。
              社会・人間・情報の学際領域について学習できるリエゾン科目や、プロジェクト系科目もあります。
              3年次からは3つの領域から2つを選択し、集中的に学習します。
              私は社会・情報コースを選択しました。
            </Typography>
            <div>
              <Image src="/school/ssi.png" width={400} height={400} alt="社会情報学部" className="px-4 sm:p-0 mx-auto" />
              <Typography sx={{ textAlign: "center" }}>
                <Link href="https://www.d-pam.com/aoyama/2311895/index.html#target/page_no=5" target="_blank" className="text-blue-500">
                  社会情報学部パンフレット
                </Link>
                より
              </Typography>
            </div>
          </div>
        </div>
        <Box sx={{ flexGrow: 1, maxWidth: 400, marginX: "auto", width: 350 }}>
          <Heading label="履修科目" h2 />
          <Box sx={{ minHeight: 200, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Button onClick={() => handleExpandClick()}>
              {expandedItems.length === 0 ? "全て広げる" : "全て閉じる"}
            </Button>
            <SimpleTreeView
              expandedItems={expandedItems}
              onExpandedItemsChange={handleExpandedItemsChange}
              sx={{ width: 350 }}
            >
              {bachelorClasses.map((bachelorClassesGroup) => (
                <TreeItem itemId={bachelorClassesGroup.area} label={bachelorClassesGroup.area} key={bachelorClassesGroup.area}>
                  {bachelorClassesGroup.classes.map((classItem: string) => (
                    <TreeItem itemId={classItem} label={classItem} key={classItem} className="cursor-default" sx={{ cursor: "default" }} style={{ cursor: "default !important" }} />
                  ))}
                </TreeItem>
              ))}
            </SimpleTreeView>
            <Button onClick={() => handleExpandClick()}>
              {expandedItems.length === 0 ? "全て広げる" : "全て閉じる"}
            </Button>
          </Box>
        </Box>
        <div>
          <Heading label="取材記事" h2 />
          <MyTimeline timelineItems={articlesTimelineItems} flexValue={0.1} />
        </div>
      </div>
    </div>
  );
};

export default Bachelor;
