export type TimelineItemType = {
  date: string;
  title: string;
  text?: string;
  titleHref?: string;
  textHref?: string;
  icon: React.ReactNode;
  iconColor: "primary" | "grey" | "inherit" | "secondary" | "error" | "info" | "success" | "warning";
};
