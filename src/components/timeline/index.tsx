import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
 
export default function TimelineComponent() {
  return (
    <div className="max-w-[25rem] py-5">
      <Timeline>
        <TimelineItem className="h-20">
          <TimelineConnector className="bg-gray-400 !w-[3px] ml-5"/>
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-2 pl-3 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-1 bg-blue-100" variant="ghost">
              <BellIcon className="h-3 w-3" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray" className="text-sm">
                $2400, Design changes
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-20">
          <TimelineConnector className="!w-[3px] bg-gray-400 ml-5" />
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-2 pl-3 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-1 bg-red-100" variant="ghost" color="red">
              <ArchiveBoxIcon className="h-3 w-3" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray" className="text-sm">
                New order #1832412
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-20">
          <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-2 pl-3 pr-8 shadow-lg shadow-blue-gray-900/5">
            <TimelineIcon className="p-1 bg-green-100" variant="ghost" color="green">
              <CurrencyDollarIcon className="h-3 w-3" />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray" className="text-sm">
                Payment completed for order #4395133
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
