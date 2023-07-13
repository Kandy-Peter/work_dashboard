import {useState} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Attendance from "./attendance";
import Onboarding from "./onboarding";
import Payroll from "./Payroll";
import Offboarding from "./offboarding";
import HumanRessource from "./human_ressource";


const RessourcesSwitcher = () => {
  const [activeTab, setActiveTab] = useState("Attendance");

  const tabs = [
    {
      name: "Attendance",
      component: <Attendance />,
    },
    {
      name: "Onboarding",
      component: <Onboarding />,
    },
    {
      name: "Payroll",
      component: <Payroll />,
    },
    // {
    //   name: "Offboarding",
    //   component: <Offboarding />,
    // },
    {
      name: "Human Ressource",
      component: <HumanRessource />,
    },
  ];

  const renderComponent = () => {
    const tab = tabs.find((tab) => tab.name === activeTab);
    return tab ? tab.component : null;
  };

  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full w-full bg-lightPrimary">
        <hr className="border-cyan-500" />
        <div className="w-full flex flex-col align-center justify-top">
          <div className="flex flex-row align-center justify-center bg-white overflow-x-auto shadow-inner border">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  className={`${
                    activeTab === tab.name
                      ? "bg-lightPrimary font-bold transition duration-500 ease-in-out rounder-t-lg border-b-2 border-cyan-500"
                      : "hover:text-cyan-200 transition duration-500 ease-in-out"
                  } px-4 py-2 mx-2 text-sm text-cyan-900`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full px-4 lg:px-40 py-4">
          <TransitionGroup>
            <CSSTransition
              key={activeTab}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              {renderComponent()}
            </CSSTransition>
          </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RessourcesSwitcher;
