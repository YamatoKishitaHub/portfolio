"use client";

import { useState } from "react";
import Image from "next/image";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { Typography } from "@mui/material";

import Heading from "../ui/Heading";
import Icon from "../ui/Icon";

type SelfIntroductionItemType = {
  label: string;
  icon: React.ReactNode;
  children?: SelfIntroductionItemType[];
  open?: boolean;
};

const SelfIntroduction = () => {
  const [selfIntroductionItems, setSelfIntroductionItems] = useState<SelfIntroductionItemType[]>([
    {
      label: "木下 倭",
      icon: <MdDriveFileRenameOutline color="#4C6CB3" />,
    },
    {
      label: "2002年生まれ",
      icon: <FaBirthdayCake color="#E91E62" />
    },
    {
      label: "学位（予定）",
      icon: <GiGraduateCap color="#10172A" />,
      children: [
        {
          label: "学士（学術）",
          icon: <GiGraduateCap color="#EB6661" />,
        },
        {
          label: "修士（学術）",
          icon: <GiGraduateCap color="#5375AB" />,
        },
      ],
    },
    {
      label: "キャリア",
      icon: <MdOutlineWork color="#864A2B" />,
      children: [
        {
          label: "2026卒",
          icon: <GiGraduateCap color="#10172A" />,
        },
        {
          label: "エンジニア志望",
          icon: <MdComputer color="#808080" />,
        },
      ],
    },
    {
      label: "各種アカウント",
      icon: <MdAccountCircle />,
      children: [
        {
          label: "YamatoKishitaHub",
          icon: <FaGithub color="#171414" />,
        },
      ],
    },
  ]);

  // ネストのリストの表示・非表示を切り替える
  const handleClickListItem = (index: number) => {
    const updatedSelfIntroductionItems = [...selfIntroductionItems];
    updatedSelfIntroductionItems[index].open = !updatedSelfIntroductionItems[index].open;
    setSelfIntroductionItems(updatedSelfIntroductionItems);
  };

  return (
    <div>
      <Heading label="自己紹介" />
      <div className="flex flex-col gap-4 w-11/12 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div>
            <Image src="/root/id_photo.jpg" width={300} height={400} alt="avatar" className="w-[210px] h-[280px] md:w-[240px] md:h-[320px] lg:w-[262.5px] lg:h-[350px] xl:w-[300px] xl:h-[400px] mx-auto rounded-full border border-slate-900" />
            <div className="text-center text-sm text-gray-500">
              ぼかし処理をしています。
            </div>
          </div>
          <div className="min-w-[360px] max-w-[1000px] mx-auto md:w-[calc(100%-300px)]">
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  基本情報
                </ListSubheader>
              }
            >
              {selfIntroductionItems.map((selfIntroductionItem, index: number) => (
                <div key={selfIntroductionItem.label}>
                  <ListItemButton onClick={() => selfIntroductionItem.children && handleClickListItem(index)} style={selfIntroductionItem.children ? {} : { cursor: "default" }}>
                    <ListItemIcon>
                      <Icon icon={selfIntroductionItem.icon} />
                    </ListItemIcon>
                    <ListItemText primary={selfIntroductionItem.label} />
                    {selfIntroductionItem.children && (selfIntroductionItem.open ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                  {selfIntroductionItem.children && (
                    selfIntroductionItem.children.map((selfIntroductionItemChild, index: number) => (
                      <Collapse in={selfIntroductionItem.open} timeout="auto" unmountOnExit key={index}>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }} style={{ cursor: "default" }}>
                            <ListItemIcon>
                              <Icon icon={selfIntroductionItemChild.icon} />
                            </ListItemIcon>
                            <ListItemText primary={selfIntroductionItemChild.label} />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    ))
                  )}
                </div>
              ))}
            </List>
          </div>
        </div>
        <Typography>
          ポートフォリオにお越しいただき、誠にありがとうございます。木下 倭（きした やまと）と申します。<br />大学生活や研究、スキルについてまとめていますので、ぜひご覧ください。
        </Typography>
      </div>
    </div>
  );
};

export default SelfIntroduction;
