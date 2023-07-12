import React from 'react';
import MainImage from "assets/img/dashboards/main_image.svg";
import {
  CheckIcon,
} from "@heroicons/react/24/outline";

const Presentation = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-40 py-4 h-full ">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <h2 className="text-4xl lg:text-5xl font-bold text-cyan-900">
                Empower Your Workforce,
                <hr className="w-1/2 mt-2 mb-4 border-2 border-orange-600" />
                <span className='text-orange-600'> Simplify Your Payroll:</span> 
              </h2>
              <p className="text-gray-700 mt-4">
                Streamline Your HR Operations, Unleash the Full Potential of Your Workforce, <br className="mt-4" />
                and Ensure Effortless Payroll Management with Our Comprehensive HR&Payroll Solutions.
              </p>
              <div className="flex items-center mt-4">
                <ul className='flex flex-wrap gap-1 lg:max-w-[60%]'>
                  <li className="w-full flex flex-1 text-sm">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Robust Integration</span>
                  </li>
                  <li className="w-full flex flex-1 text-sm">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Compliance Assurance</span>
                  </li>
                  <div className="w-full"></div>
                  <li className="w-full flex flex-1 text-sm">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Data Security</span>
                  </li>
                  <li className="w-full flex flex-1 text-sm">
                    <CheckIcon className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Time and Cost Savings</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center mt-4 lg:mt-10">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full lg:w-1/2 my-10 lg:my-0">
              <img src={MainImage} alt="main_image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
