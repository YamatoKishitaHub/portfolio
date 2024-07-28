"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import { IoEnterOutline } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { FiTool } from "react-icons/fi";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiThreedotjs } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import { SiCodemirror } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiReacthookform } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { SiAxios } from "react-icons/si";
import { IoShieldSharp } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { SiArduino } from "react-icons/si";
import { FaCloud } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";
import { FaCookie } from "react-icons/fa6";

import Heading from "../ui/Heading";
import Icon from "../ui/Icon";

type LearningSkillType = {
  label: string;
  icon: React.ReactNode;
  children?: LearningSkillType[];
  open?: boolean;
};

type WorkType = {
  label: string;
  text: string;
  date: string;
  image: string;
  url: string;
  github: string;
  skills: {
    label: string;
    icon: React.ReactNode;
  }[];
  open: boolean;
};

const Programming = () => {
  const skillIcons = {
    HTML: <FaHtml5 color="#DC4A25" />,
    CSS: <FaCss3Alt color="#136DB0" />,
    SASS: <FaSass color="#CE649A" />,
    TailwindCSS: <SiTailwindcss color="#37BCF8" />,
    JavaScript: <RiJavascriptFill color="#EFD81C" />,
    TypeScript: <BiLogoTypescript color="#2F74C0" />,
    React: <FaReact color="#5ED3F3" />,
    NextJS: <TbBrandNextjs color="#F7F7F7" fill="#000000" />,
    NodeJS: <FaNodeJs color="#87C148" />,
    Express: <SiExpress color="#010101" />,
    Python: <FaPython />,
    PHP: <SiPhp color="#777BB3" />,
    database: <FaDatabase />,
    MongoDB: <BiLogoMongodb color="#14A44D" />,
    Supabase: <RiSupabaseFill color="#3CD08E" />,
    others: <FiTool />,
    Git: <FaGitAlt color="#E84D32" />,
    GitHub: <FaGithub color="#171414" />,
    ThreeJS: <SiThreedotjs color="#000000" />,
    Firebase: <SiFirebase color="#FFCB2B" />,
    Strapi: <SiStrapi color="#4845FE" />,
    Stripe: <BsStripe color="#635AFF" />,
    Prisma: <SiPrisma color="#0C344B" />,
    Vercel: <IoLogoVercel color="#000000" />,
    Render: <SiRender color="#44DCB0" />,
    Codemirror: <SiCodemirror color="#2A2829" />,
    SocketIO: <SiSocketdotio color="#010101" />,
    MUI: <SiMui color="#027FFE" />,
    Bootstrap: <FaBootstrap color="#8B12FC" />,
    ReactHookForm: <SiReacthookform color="#EC5990" />,
    Vite: <TbBrandVite color="#906BFE" />,
    Axios: <SiAxios color="#7950E9" />,
    NextAuthJS: <IoShieldSharp color="#6ADBD9" />,
    Redux: <SiRedux color="#764ABC" />,
    Arduino: <SiArduino color="#015C5F" />,
    EzData: <FaCloud color="#319ED0" />,
    GoogleAnalytics: <SiGoogleanalytics color="#E37401" />,
    Cookie: <FaCookie color="#DEA04F" />,
  };

  const [learningSkills, setLearningSkills] = useState<LearningSkillType[]>([
    {
      label: "HTML",
      icon: skillIcons.HTML,
    },
    {
      label: "CSS",
      icon: skillIcons.CSS,
      children: [
        {
          label: "SASS",
          icon: skillIcons.SASS,
        },
        {
          label: "Tailwind CSS",
          icon: skillIcons.TailwindCSS,
        }
      ],
    },
    {
      label: "JavaScript",
      icon: skillIcons.JavaScript,
    },
    {
      label: "TypeScript",
      icon: skillIcons.TypeScript,
    },
    {
      label: "React",
      icon: skillIcons.React,
    },
    {
      label: "Next.js",
      icon: skillIcons.NextJS,
    },
    {
      label: "Node.js",
      icon: skillIcons.NodeJS,
      children: [
        {
          label: "Express",
          icon: skillIcons.Express,
        },
      ],
      open: false,
    },
    {
      label: "Python",
      icon: skillIcons.Python,
    },
    {
      label: "PHP",
      icon: skillIcons.PHP,
    },
    {
      label: "データベース",
      icon: skillIcons.database,
      children: [
        {
          label: "MongoDB",
          icon: skillIcons.MongoDB,
        },
        {
          label: "Supabase",
          icon: skillIcons.Supabase,
        },
        {
          label: "Firebase",
          icon: skillIcons.Firebase,
        },
      ],
      open: false,
    },
    {
      label: "その他",
      icon: skillIcons.others,
      children: [
        {
          label: "Git",
          icon: skillIcons.Git,
        },
        {
          label: "GitHub",
          icon: skillIcons.GitHub,
        },
      ],
      open: false,
    },
  ]);

  // ネストのリストの表示・非表示を切り替える
  const handleClickListItem = (index: number) => {
    const updatedLearningSkills = [...learningSkills];
    updatedLearningSkills[index].open = !updatedLearningSkills[index].open;
    setLearningSkills(updatedLearningSkills);
  };

  const [works, setWorks] = useState<WorkType[]>([
    {
      label: "ホームページ",
      text: "こちらのホームページの情報は2023年時点のものです。HTML、CSS、JavaScriptで作成しました。ですが、HTMLとJavaScriptで同じようなコードを何回も書いており、ReactやNext.jsなどのライブラリやフレームワークを学習しようというきっかけになりました。",
      date: "2023年6月から7月",
      image: "/skill/homepage.png",
      url: "https://kishita-homepage.vercel.app/",
      github: "https://github.com/YamatoKishitaHub/homepage",
      skills: [
        {
          label: "HTML",
          icon: skillIcons.HTML,
        },
        {
          label: "SCSS",
          icon: skillIcons.SASS,
        },
        {
          label: "JavaScript",
          icon: skillIcons.JavaScript,
        },
        {
          label: "Cookie",
          icon: skillIcons.Cookie,
        },
        {
          label: "Google Analytics",
          icon: skillIcons.GoogleAnalytics,
        },
      ],
      open: false,
    },
    {
      label: "ブログ",
      text: "Reactについて学習し始め、初めてのアウトプットとして作成したブログです。GoogleやGitHubでログインすることで、どなたでもご利用可能です。",
      date: "2023年9月から10月",
      image: "/skill/blog.png",
      url: "https://yamatokishita-blog.web.app/",
      github: "https://github.com/YamatoKishitaHub/blog",
      skills: [
        {
          label: "React",
          icon: skillIcons.React,
        },
        {
          label: "TypeScript",
          icon: skillIcons.TypeScript,
        },
        {
          label: "SCSS",
          icon: skillIcons.SASS,
        },
        {
          label: "Material UI",
          icon: skillIcons.MUI,
        },
        {
          label: "Firebase",
          icon: skillIcons.Firebase,
        },
      ],
      open: false,
    },
    {
      label: "スノードーム",
      text: "Blenderで3Dモデルを作成したことはありましたが、JavaScriptでも3Dモデルを作成できると聞き、気になって学習してみました。",
      date: "2023年12月",
      image: "/skill/snowdome.png",
      url: "https://snowdome.vercel.app/",
      github: "https://github.com/YamatoKishitaHub/snow-globe",
      skills: [
        {
          label: "Three.js",
          icon: skillIcons.ThreeJS,
        },
        {
          label: "Vercel",
          icon: skillIcons.Vercel,
        },
        {
          label: "Vite",
          icon: skillIcons.Vite,
        },
      ],
      open: false,
    },
    {
      label: "シューティングゲーム",
      text: "大学の授業で作成したシューティングゲームのスコアを確認できるWebページです。このゲームを遊ぶにはM5StickC Plusが必要です。",
      date: "2024年1月",
      image: "/skill/shooting-game.png",
      url: "https://shooting-game-with-arduino-m5stickcplus.vercel.app/",
      github: "https://github.com/YamatoKishitaHub/shooting-game",
      skills: [
        {
          label: "React",
          icon: skillIcons.React,
        },
        {
          label: "Vite",
          icon: skillIcons.Vite,
        },
        {
          label: "Arduino",
          icon: skillIcons.Arduino,
        },
        {
          label: "EzData",
          icon: skillIcons.EzData,
        },
      ],
      open: false,
    },
    {
      label: "ECサイト",
      text: "Reactに続き、Next.jsを学習し始め、アプトプットとして作成したECサイトです。Strapiを使用しましたが、デプロイしてもデータが1日で消えてしまう現象が起きています。",
      date: "2023年12月から2024年2月",
      image: "/skill/ec-site.png",
      url: "https://kishiyama-dot-com.vercel.app/",
      github: "https://github.com/YamatoKishitaHub/ec-site",
      skills: [
        {
          label: "Next.js",
          icon: skillIcons.NextJS,
        },
        {
          label: "TypeScript",
          icon: skillIcons.TypeScript,
        },
        {
          label: "Tailwind CSS",
          icon: skillIcons.TailwindCSS,
        },
        {
          label: "Material UI",
          icon: skillIcons.MUI,
        },
        {
          label: "Strapi",
          icon: skillIcons.Strapi,
        },
        {
          label: "Stripe",
          icon: skillIcons.Stripe,
        },
        {
          label: "Vercel",
          icon: skillIcons.Vercel,
        },
      ],
      open: false,
    },
    {
      label: "Code X",
      text: "MongoDBやSupabaseを学習したため、SNSを作ってみようと思いました。コードを共有することができれば便利だと思い、Code Xを作りました。",
      date: "2024年2月から3月",
      image: "/skill/code-x.png",
      url: "https://code-x-sns-for-engineer.vercel.app/",
      github: "https://github.com/YamatoKishitaHub/Code-X",
      skills: [
        {
          label: "Next.js",
          icon: skillIcons.NextJS,
        },
        {
          label: "TypeScript",
          icon: skillIcons.TypeScript,
        },
        {
          label: "NextAuth.js",
          icon: skillIcons.NextAuthJS,
        },
        {
          label: "Redux",
          icon: skillIcons.Redux,
        },
        {
          label: "Axios",
          icon: skillIcons.Axios,
        },
        {
          label: "Codemirror",
          icon: skillIcons.Codemirror,
        },
        {
          label: "Tailwind CSS",
          icon: skillIcons.TailwindCSS,
        },
        {
          label: "MongoDB",
          icon: skillIcons.MongoDB,
        },
        {
          label: "Prisma",
          icon: skillIcons.Prisma,
        },
        {
          label: "Vercel",
          icon: skillIcons.Vercel,
        },
      ],
      open: false,
    },
    {
      label: "PDF→Word変換ツール",
      text: "PDFファイルをアップロードすると、Wordファイルに変換し、ダウンロードすることができるWebアプリケーションです。PDFファイルからWordファイルの変換にPythonを用いていることもあり、デプロイに失敗中です。",
      date: "2024年3月",
      image: "/skill/pdf-to-word.png",
      url: "https://pdf-to-word-conversion-tool.vercel.app/",
      github: "https://github.com/YamatoKishitaHub/pdf-to-word",
      skills: [
        {
          label: "Next.js",
          icon: skillIcons.NextJS,
        },
        {
          label: "TypeScript",
          icon: skillIcons.TypeScript,
        },
        {
          label: "Node.js",
          icon: skillIcons.NodeJS,
        },
        {
          label: "Express",
          icon: skillIcons.Express,
        },
        {
          label: "Supabase",
          icon: skillIcons.Supabase,
        },
        {
          label: "Prisma",
          icon: skillIcons.Prisma,
        },
        {
          label: "Tailwind CSS",
          icon: skillIcons.TailwindCSS,
        },
        {
          label: "Python",
          icon: skillIcons.Python,
        },
        {
          label: "Socket.IO",
          icon: skillIcons.SocketIO,
        },
        {
          label: "Vercel",
          icon: skillIcons.Vercel,
        },
        {
          label: "Render",
          icon: skillIcons.Render,
        },
      ],
      open: false,
    },
    {
      label: "ポートフォリオ",
      text: "このポートフォリオサイトです。大学生活や研究等についてまとめています。",
      date: "2024年4月から5月",
      image: "/skill/portfolio.png",
      url: "https://kishitayamato.com",
      github: "https://github.com/YamatoKishitaHub/portfolio",
      skills: [
        {
          label: "Next.js",
          icon: skillIcons.NextJS,
        },
        {
          label: "TypeScript",
          icon: skillIcons.TypeScript,
        },
        {
          label: "Node.js",
          icon: skillIcons.NodeJS,
        },
        {
          label: "Express",
          icon: skillIcons.Express,
        },
        {
          label: "Tailwind CSS",
          icon: skillIcons.TailwindCSS,
        },
        {
          label: "React Hook Form",
          icon: skillIcons.ReactHookForm,
        },
        {
          label: "Material UI",
          icon: skillIcons.MUI,
        },
        {
          label: "Supabase",
          icon: skillIcons.Supabase,
        },
        {
          label: "Prisma",
          icon: skillIcons.Prisma,
        },
        {
          label: "Vercel",
          icon: skillIcons.Vercel,
        },
        {
          label: "Render",
          icon: skillIcons.Render,
        },
      ],
      open: false,
    },
    {
      label: "掲示板サイト",
      text: "Node.js (Express)でTypeScriptを使用する練習、FirebaseとSocket.IOの復習のために作成した掲示板サイトです。",
      date: "2024年7月",
      image: "/skill/bbs.png",
      url: "https://bulletin-board-system-site.vercel.app/",
      github: "https://github.com/YamatoKishitaHub/bbs",
      skills: [
        {
          label: "Next.js",
          icon: skillIcons.NextJS,
        },
        {
          label: "TypeScript",
          icon: skillIcons.TypeScript,
        },
        {
          label: "Node.js",
          icon: skillIcons.NodeJS,
        },
        {
          label: "Express",
          icon: skillIcons.Express,
        },
        {
          label: "Tailwind CSS",
          icon: skillIcons.TailwindCSS,
        },
        {
          label: "Firebase",
          icon: skillIcons.Firebase,
        },
        {
          label: "Socket.IO",
          icon: skillIcons.SocketIO,
        },
        {
          label: "Vercel",
          icon: skillIcons.Vercel,
        },
        {
          label: "Render",
          icon: skillIcons.Render,
        },
      ],
      open: false,
    },
  ]);

  const handleModal = (index: number) => {
    const updatedWorks = [...works];
    updatedWorks[index].open = !updatedWorks[index].open;
    setWorks(updatedWorks);
  };

  return (
    <div>
      <Heading label="プログラミング" />
      <div className="flex flex-col gap-4">
        <div>
          <Heading label="学習技術" h2 />
          <div>
            <List
              sx={{ width: "100%", maxWidth: 1280, bgcolor: "background.paper", mx: "auto" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              className="flex flex-wrap w-80 sm:w-[640px] lg:w-[960px] 2xl:w-[1280px]"
            >
              {learningSkills.map((learningSkill, index: number) => (
                <div key={index} className="w-80">
                  <ListItemButton onClick={() => learningSkill.children && handleClickListItem(index)} style={learningSkill.children ? {} : { cursor: "default" }}>
                    <ListItemIcon>
                      <Icon icon={learningSkill.icon} />
                    </ListItemIcon>
                    <ListItemText primary={learningSkill.label} />
                    {learningSkill.children && (learningSkill.open ? <ExpandLess /> : <ExpandMore />)}
                  </ListItemButton>
                  {learningSkill.children && (
                    learningSkill.children.map((learningSkillChild, index: number) => (
                      <Collapse in={learningSkill.open} timeout="auto" unmountOnExit key={index}>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }} style={{ cursor: "default" }}>
                            <ListItemIcon>
                              <Icon icon={learningSkillChild.icon} />
                            </ListItemIcon>
                            <ListItemText primary={learningSkillChild.label} />
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
        <div>
          <Heading label="作品" h2 />
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4">
            {works.map((work, index: number) => (
              <div key={work.label} className="md:w-[40%] lg:w-[30%]">
                <Image src={work.image} width={500} height={500} alt={work.label} onClick={() => handleModal(index)} className="max-w-[95%] mx-auto border border-slate-900 cursor-pointer" />
                <Modal
                  open={work.open}
                  onClose={() => handleModal(index)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className="w-4/5 lg:w-1/2 h-auto mx-auto"
                >
                  <Box sx={{
                    position: "absolute" as "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    height: "auto",
                    maxHeight: "90%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    overflowY: "scroll",
                  }}>
                    <div>
                      <RxCross2 size={28} onClick={() => handleModal(index)} className="cursor-pointer" />
                      <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ textAlign: "center" }}>
                        {work.label}
                      </Typography>
                      <Typography id="modal-modal-title" sx={{ textAlign: "center" }}>
                        {work.date}に開発
                      </Typography>
                      <Typography id="modal-modal-title">
                        {work.text}
                      </Typography>
                    </div>
                    <Image src={work.image} width={1000} height={500} alt={work.label} className="border border-slate-900" />
                    <div>
                      <Typography id="modal-modal-title" variant="h6" sx={{ textAlign: "center" }}>
                        主な使用技術
                      </Typography>
                      <div className="flex flex-wrap gap-2">
                        {work.skills.map((skill) => (
                          <Button variant="outlined" startIcon={<Icon icon={skill.icon} />} style={{ textTransform: "none" }} key={skill.label} className="text-black hover:bg-white border-black hover:border-black cursor-default">
                            {skill.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center gap-4">
                      <Link href={work.url} target="_blank">
                        <Button variant="contained" startIcon={<IoEnterOutline />} className="bg-slate-900 hover:bg-slate-900">
                          アクセス
                        </Button>
                      </Link>
                      <Link href={work.github} target="_blank">
                        <Button variant="contained" startIcon={<FaGithub />} style={{ textTransform: "none" }} className="bg-slate-900 hover:bg-slate-900">
                          GitHub
                        </Button>
                      </Link>
                    </div>
                  </Box>
                </Modal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programming;
