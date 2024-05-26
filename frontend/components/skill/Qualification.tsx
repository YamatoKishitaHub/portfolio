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
  const qualifications: QualificationType[] = [
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
      label: "日本商工会議所簿記検定試験3級",
      date: "2023.01（2023.01 受験）",
      icon: <FaCalculator color="#B7D4E9" />,
    },
    {
      label: "G検定（JDLA Deep Learning for GENERAL 2023#2）",
      date: "2023.06（2023.05 受験）",
      icon: <GiArtificialIntelligence color="#118371" />,
    },
    {
      label: "TOEIC Listening & Reading 755点",
      date: "2023.07（2023.06 受験）",
      icon: <RiEnglishInput color="#000064" />,
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
  ];

  return (
    <div>
      <Heading label="資格" />
      <div>
        <List
          sx={{ width: "100%", maxWidth: 1280, bgcolor: "background.paper", mx: "auto" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="flex flex-wrap w-80 sm:w-[640px] lg:w-[960px] 2xl:w-[1280px]"
        >
          {qualifications.map((qualification, index: number) => (
            <div key={index} className="w-80">
              <ListItemButton style={{ cursor: "default" }}>
                <ListItemIcon>
                  <Icon icon={qualification.icon} />
                </ListItemIcon>
                <ListItemText primary={qualification.label} secondary={qualification.date} />
              </ListItemButton>
            </div>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Qualification;
