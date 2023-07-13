import React from 'react';
import {
  LockClosedIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  KeyIcon,
  ServerStackIcon,
  TableCellsIcon,
  ChartBarSquareIcon
} from "@heroicons/react/24/solid";

import CardHomePage from 'components/card/CardHomePage';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const cardData =[
  {
    title: "Data Protection",
    description: "Advanced encryption, secure transmission, and robust firewalls safeguard your sensitive information.",
    icon: <ShieldCheckIcon className="w-4 h-4 text-green-500" />,
  },
  {
    title: "Privacy Regulations",
    description: "We strictly adhere to global privacy regulations, such as GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act).",
    icon: <LockClosedIcon className="w-4 h-4 text-green-500" />,
  },
  {
    title: "Customized Access",
    description: "Define user roles and access levels with customizable permissions, minimizing unauthorized access to sensitive information.",
    icon: <KeyIcon className="w-4 h-4 text-green-500" />,
  },
  {
    title: "Data Records",
    description: "Track and audit all data changes with comprehensive historical records for complete data activity visibility.",
    icon: <ServerStackIcon className="w-4 h-4 text-green-500" />,
  },
  {
    title: "Audit Trails",
    description: " Detailed logs of user activities, system changes, and data access provide a thorough historical overview of all organization interactions.",
    icon: <TableCellsIcon className="w-4 h-4 text-green-500" />,
  },
  { title: "Activity Monitoring",
    description: "Real-time monitoring enables close observation of user interactions, including logins, document views, and edits.",
    icon: <ChartBarSquareIcon className="w-4 h-4 text-green-500" />,
  },

]

const SecuritySection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-sky-800 py-4 lg:py-20">
      <div className="flex flex-col items-center justify-center p-4 lg:flex-row lg:justify-between lg:px-60">
        <div className="flex flex-col justify-center w-full">
          <h4 className="mb-2.5 text-xl font-bold text-white flex gap-1">
            <LockClosedIcon className="w-4 h-4 mt-1.5" />
            Security
          </h4>
          <h6 className="mb-9 ml-1 text-bold text-4xl text-white lg:max-w-[80%]">
            At Heri data privacy and security is our top priority
          </h6>
          <p className="mb-9 ml-1 text-base text-gray-300 lg:max-w-[90%]">
            Safeguarding your confidentiality is our top priority at Heri. We Implement stringent privacy measures and industry-leading security protocoles to protect your sensitive information.
            Our custom permission and approval settings ensure proper access controls, granting authorized users the right level of information access.
          </p>
          <button className="px-4 py-4 text-sm font-bold text-white bg-sky-700 rounded-md hover:bg-sky-600 flex align-center gap-2 max-w-[150px]">
            Check It Up <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className = "flex flex-wrap justify-center gap-4">
            {cardData.map((card, index) => (
              <CardHomePage
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuritySection;
