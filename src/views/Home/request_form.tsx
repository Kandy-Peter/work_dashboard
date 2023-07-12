import InputField from "components/fields/InputField";
import {
  WrenchScrewdriverIcon,
  BanknotesIcon,
  BoltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const RequestForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-sky-800 py-4">
      <div className="flex flex-col items-center justify-center p-4 lg:flex-row lg:justify-between lg:px-60">
        <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              Discover the Power of Heri HR: Request a Demo Now!
            </h2>
            <p className="text-gray-200 mt-4 text-sm">
              Embrance your organzation's vibrant diversity and unleash its potential with Heri HR solutions: <br />
              Streamline your tasks and focus on what matters most. From recruitment to retirement, we have you covered and 
              fomm effortless onboarding to seamless payroll management, our stystem works for you!
            </p>
            <ul className="flex flex-col items-start justify-between mt-4 text-sm text-gray-200 w-full">
              <li className="flex items-center justify-center gap-2 mb-6 pl-[1%]">
                <WrenchScrewdriverIcon className="h-5 w-5 text-green-500" />
                <span>Simplify HR Operations</span>
              </li>
              <li className="flex items-center justify-center gap-2 mb-6 pl-[1%]">
                <BanknotesIcon className="h-5 w-5 text-green-500" />
                <span>Streamline Payroll Management</span>
              </li>
              <li className="flex items-center justify-center gap-2 mb-6 pl-[1%]">
                <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                <span>Ensure Compliance</span>
              </li>
              <li className="flex items-center justify-center gap-2 mb-6 pl-[1%]">
                <BoltIcon className="h-5 w-5 text-green-500" />
                <span>Optimize Workforce Performance</span>
              </li>
              <li className="flex items-center justify-center gap-2 mb-6 pl-[1%]">
                <UserGroupIcon className="h-5 w-5 text-green-500" />
                <span>Drive Employee Engagement</span>
              </li>
            </ul>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="mt-[10vh] w-full max-w-full flex-col items-center p-4 lg:px-8 md:pl-4 xl:max-w-[85%] bg-white">
              <h4 className="mb-2.5 text-4xl font-bold text-sky-700 dark:text-white">
                Request a Demo
              </h4>
              <p className="mb-9 ml-1 text-base text-gray-700">
                Simplify Your HR Processes: Schedule a Demo of Heri HR Today!
              </p>
              {/* Email */}
              <InputField
                variant="demo"
                extra="mb-3"
                label="Full name*"
                placeholder="Mark Murhula"
                id="name"
                type="text"
                value=""
                error=""
                onChange={() => {}}
              />
              {/* Email */}
              <InputField
                variant="demo"
                extra="mb-3"
                label="Email*"
                placeholder="markm@axample.com"
                id="email"
                type="email"
                value=""
                error=""
                onChange={() => {}}
              />
              <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Organization name */}
                <InputField
                  variant="demo"
                  extra="mb-3"
                  label="Organization name*"
                  placeholder="Heri HR"
                  id="organization"
                  type="text"
                  value=""
                  error=""
                  onChange={() => {}}
                />
                {/* Website */}
                <InputField
                  variant="demo"
                  extra="mb-3"
                  label="Website"
                  placeholder="https://herihr.com"
                  id="website"
                  type="text"
                  value=""
                  error=""
                  onChange={() => {}}
                />
              </div>
              {/* Phone */}
              <InputField
                variant="demo"
                extra="mb-3"
                label="Phone"
                placeholder="+250 788 000 000"
                id="phone"
                type="text"
                value=""
                error=""
                onChange={() => {}}
              />
              {/* How did you hear about us? */}
              <InputField
                variant="demo"
                extra="mb-3"
                label="How did you hear about us?"
                placeholder="Google, Facebook, Twitter, LinkedIn, etc."
                id="hear"
                type="text"
                value=""
                error=""
                onChange={() => {}}
              />
              {/* Button */}
              <div className="flex flex-col items-center justify-center w-full">
                <button className="w-full h-12 bg-orange-600 hover:bg-orange-800 text-white font-bold text-base rounded-md">
                  Submit Request
                </button>
              </div>
              <div className="flex items-center justify-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 mr-2 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <p className="text-xs text-gray-600 mt-2">
                  We garanty 100% privacy. Your information will not be shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestForm;