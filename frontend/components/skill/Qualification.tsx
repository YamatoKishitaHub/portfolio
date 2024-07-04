import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsFillPassportFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiEnglishInput } from "react-icons/ri";
import { FaCalculator } from "react-icons/fa6";
import { Si365Datascience } from "react-icons/si";

import Heading from "../ui/Heading";
import Icon from "../ui/Icon";

type QualificationType = {
  label: string;
  date: string;
  icon: React.ReactNode;
};

const Qualification = () => {
  const itQualifications: QualificationType[] = [
    {
      label: "ITパスポート",
      date: "2022.03（2022.02 受験）",
      icon: <BsFillPassportFill color="#C61313" />,
    },
    {
      label: "基本情報技術者試験",
      date: "2022.05（2022.04 受験）",
      icon: <MdComputer color="#025DB8" />,
    },
    {
      label: "情報セキュリティマネジメント試験",
      date: "2022.07（2022.06 受験）",
      icon: <MdSecurity color="#02853F" />,
    },
    {
      label: "G検定（JDLA Deep Learning for GENERAL 2023#2）",
      date: "2023.06（2023.05 受験）",
      icon: <GiArtificialIntelligence color="#118371" />,
    },
    {
      label: "データサイエンティスト検定",
      date: "2024.01（2023.11 受験）",
      icon: <Si365Datascience color="#0164B0" />,
    },
    {
      label: "DX推進パスポート3",
      date: "2024.03",
      icon: <BsFillPassportFill color="#223B7C" />,
    },
    {
      label: "応用情報技術者試験",
      date: "2024.07（2024.4 受験）",
      icon: <MdComputer color="#025DB8" />,
    },
  ];

  const otherQualifications: QualificationType[] = [
    {
      label: "日本商工会議所簿記検定試験3級",
      date: "2023.01（2023.01 受験）",
      icon: <FaCalculator color="#B7D4E9" />,
    },
    {
      label: "TOEIC Listening & Reading 755点",
      date: "2023.07（2023.06 受験）",
      icon: <RiEnglishInput color="#000064" />,
    },
  ];

  return (
    <div>
      <Heading label="資格" />
      <div>
        <div>
          <Heading label="IT系" h2 />
          <List
            sx={{ width: "100%", maxWidth: 1280, bgcolor: "background.paper", mx: "auto" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className="flex flex-wrap w-80 sm:w-[640px] lg:w-[960px] 2xl:w-[1280px] pt-0 -mt-2"
          >
            {itQualifications.map((itQualification, index: number) => (
              <div key={index} className="w-80">
                <ListItemButton style={{ cursor: "default" }}>
                  <ListItemIcon>
                    <Icon icon={itQualification.icon} />
                  </ListItemIcon>
                  <ListItemText primary={itQualification.label} secondary={itQualification.date} />
                </ListItemButton>
              </div>
            ))}
          </List>
        </div>
        <div>
          <Heading label="その他" h2 />
          <List
            sx={{ width: "100%", maxWidth: 1280, bgcolor: "background.paper", mx: "auto" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className="flex flex-wrap w-80 sm:w-[640px] lg:w-[960px] 2xl:w-[1280px] pt-0 -mt-2"
          >
            {otherQualifications.map((otherQualification, index: number) => (
              <div key={index} className="w-80">
                <ListItemButton style={{ cursor: "default" }}>
                  <ListItemIcon>
                    <Icon icon={otherQualification.icon} />
                  </ListItemIcon>
                  <ListItemText primary={otherQualification.label} secondary={otherQualification.date} />
                </ListItemButton>
              </div>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
