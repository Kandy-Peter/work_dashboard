import {
  Timeline,
} from "@material-tailwind/react";

import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

import TimelineItem from "components/timeline";
import ProgressImage from "assets/img/home/section_attendance.png";


const HumanRessource = () => {
  return (
    <div className="flex h-full w-full">
      <div className="h-full w-full bg-lightPrimary">
          <div className="flex flex-col lg:flex-row items-center justify-around px-4 py-4 w-full ">
            <div className="flex flex-col items-center justify-center w-full lg:px-4 py-4 lg:py-[10%]">
              <img src={ProgressImage} alt="Progress" className="w-full lg:w-[80%]" />
            </div>
            {/* vertical line */}
            <div className="hidden lg:block border-r-2 border-gray-300 h-80"></div>
            <div className="flex flex-col w-full py-4 lg:pl-20">
              <h2 className="text-4xl font-bold text-cyan-900">
                Unleash the Full Potential of Your Human Resources
              </h2>
              <p className="text-gray-700 mt-4 text-sm">
                Empower HR to Drive Organizational Excellence, Enhance Employee Engagement, and Cultivate a Positive Work Culture. From Talent Acquisition to Development, We've Got You Covered.
              </p>
              {/* Timeline with description */}
              <div className="max-w-[25rem] py-5">
                <Timeline>
                  <TimelineItem
                    connector
                    icon={<BellIcon className="h-3 w-3" />}
                    text="Talent acquisition and management"
                  />
                  <TimelineItem
                    connector
                    icon={<ArchiveBoxIcon className="h-3 w-3" />}
                    text="Employee engagement and development"
                  />
                  <TimelineItem
                    icon={<CurrencyDollarIcon className="h-3 w-3" />}
                    text="HR policy compliance"
                  />
                  <TimelineItem
                    connector={false}
                    icon={<CurrencyDollarIcon className="h-3 w-3" />}
                    text="Data driven insights"
                  />
                </Timeline>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default HumanRessource;

