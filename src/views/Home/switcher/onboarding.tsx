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


const Onboarding = () => {
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
                Elevate your onboarding experience and improve employee retention
              </h2>
              <p className="text-gray-700 mt-4 text-sm">
                Strameline the journey from offer acceptance to productive team member. Enhance engament, cultivate connections, and set the stage for success.
              </p>
              {/* Timeline with description */}
              <div className="max-w-[25rem] py-5">
                <Timeline>
                  <TimelineItem
                    connector
                    icon={<BellIcon className="h-3 w-3" />}
                    text="Seamles process for new hires"
                  />
                  <TimelineItem
                    connector
                    icon={<ArchiveBoxIcon className="h-3 w-3" />}
                    text="Engaging employee experience"
                  />
                  <TimelineItem
                    icon={<CurrencyDollarIcon className="h-3 w-3" />}
                    text="Compliance and documentation"
                  />
                  <TimelineItem
                    connector={false}
                    icon={<CurrencyDollarIcon className="h-3 w-3" />}
                    text="Manager and Team integration"
                  />
                </Timeline>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Onboarding;

