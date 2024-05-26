"use client";

import useMediaQuery from "@mui/material/useMediaQuery";

type IconProps = {
  icon: React.ReactNode;
};

const Icon = ({ icon }: IconProps) => {
  const sm = useMediaQuery("(min-width:640px)");
  const md = useMediaQuery("(min-width:768px)");

  return (
    <div style={{ fontSize: md ? 28 : sm ? 24 : 20 }}>
      {icon}
    </div>
  );
};

export default Icon;
