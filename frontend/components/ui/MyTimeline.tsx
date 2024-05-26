import Link from "next/link";

import { Box } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import Icon from "./Icon";

type MyTimelineProps = {
  timelineItems: {
    date: string;
    title: string;
    text?: string;
    titleHref?: string;
    textHref?: string;
    icon: React.ReactNode;
    iconColor: "primary" | "grey" | "inherit" | "secondary" | "error" | "info" | "success" | "warning";
  }[];
  flexValue: number;
};

const MyTimeline = ({ timelineItems, flexValue }: MyTimelineProps) => {
  return (
    <Box sx={{ flexGrow: 1, marginX: "auto" }} className="w-auto mx-auto">
      <Timeline>
        {/* 1つ目のTimelineItemがずれてしまうためダミー */}
        <TimelineItem className="hidden">
          <TimelineOppositeContent></TimelineOppositeContent>
        </TimelineItem>
        {timelineItems.map((timelineItem) => (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0", flex: flexValue / 2 }}
              variant="body2"
              color="text.secondary"
              className="sm:hidden pl-0 pr-2"
            >
              {timelineItem.date}
            </TimelineOppositeContent>
            <TimelineOppositeContent
              sx={{ m: "auto 0", flex: flexValue }}
              variant="body2"
              color="text.secondary"
              className="hidden sm:block"
            >
              {timelineItem.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={timelineItem.iconColor}>
                <Icon icon={timelineItem.icon} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ m: "auto 0", py: "12px", px: 2 }} className="px-2 md:px-4">
              <Typography className="text-sm md:text-base lg:text-lg">
                {timelineItem.titleHref ? (
                  <Link href={timelineItem.titleHref} target="_blank" className="text-blue-500">
                    {timelineItem.title}
                  </Link>
                ) : (
                  timelineItem.title
                )}
              </Typography>
              <Typography className="text-sm md:text-base">
                {timelineItem.textHref ? (
                  <Link href={timelineItem.textHref} target="_blank" className="text-blue-500">
                    {timelineItem.text}
                  </Link>
                ) : (
                  <span className="text-gray-500">
                    {timelineItem.text}
                  </span>
                )}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default MyTimeline;
