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


const Offboarding = () => {
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
                Seamless Transitions and Positive Farewells
              </h2>
              <p className="text-gray-700 mt-4 text-sm">
                Streamline Off-boarding Processes, Exit Interviews, and Knowledge Transfer.
                Preserve Relationships, Alleviate Stress, and Embrace Growth Opportunities.
              </p>
              {/* Timeline with description */}
              <div className="max-w-[25rem] py-5">
                <Timeline>
                  <TimelineItem
                    connector
                    icon={<BellIcon className="h-3 w-3" />}
                    text="Efficience departure process"
                  />
                  <TimelineItem
                    connector
                    icon={<ArchiveBoxIcon className="h-3 w-3" />}
                    text="Knowledge transfer"
                  />
                  <TimelineItem
                    icon={<CurrencyDollarIcon className="h-3 w-3" />}
                    text="Compliance and documentation"
                  />
                  <TimelineItem
                    connector={false}
                    icon={<CurrencyDollarIcon className="h-3 w-3" />}
                    text="Employee feedback and insights"
                  />
                </Timeline>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Offboarding;
