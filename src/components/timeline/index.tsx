import React from "react";
import {
  TimelineItem as MaterialTimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";

type Color = "blue" | "red" | "green" | "orange" | "light-blue" | "indigo" | "purple" | "pink" | "yellow";

interface TimelineItemProps {
  connector?: boolean;
  icon: React.ReactNode;
  colorIcon?: Color; // Use the color type
  text: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  connector = true,
  icon,
  colorIcon = "blue",
  text,
}) => {
  return (
    <MaterialTimelineItem className="h-20">
      {connector && <TimelineConnector className="!w-[3px] bg-gray-400 ml-5" />}
      <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-lightPrimary py-2 pl-3 pr-8 shadow-lg shadow-blue-gray-900/5">
        <TimelineIcon
          className={`p-1 bg-${colorIcon}-100`}
          variant="ghost"
          color={colorIcon}
        >
          {icon}
        </TimelineIcon>
        <div className="flex flex-col gap-1">
          <Typography variant="h6" className="text-sm text-cyan-900">
            {text}
          </Typography>
        </div>
      </TimelineHeader>
    </MaterialTimelineItem>
  );
};

export default TimelineItem;