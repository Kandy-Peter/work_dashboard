const reasons = [
  {
    stat: "30%",
    title: "Cost Savings",
    description: "Save up to 30% on HR and payroll costs by leveraging our efficient systems and streamlined processes"
  },
  {
    stat: "+10h",
    title: "Time Efficiency",
    description: " Reduce HR administrative tasks by 40% and save an average of 10 hours per week through automation and self-service features."
  },
  {
    stat: "100%",
    title: "Compliance",
    description: "Ensure compliance with local labor laws and regulations by leveraging our HR and payroll solutions."
  },
  {
    stat: "35%",
    title: "Employee Satisfaction",
    description: "Improve employee satisfaction by 35% through self-service portals, easy access to pay information, and seamless onboarding experiences."
  },
  {
    stat: "90%",
    title: "Error Reduction",
    description: "Minimize payroll errors by 90% through automated calculations and data validation, enhancing accuracy and eliminating costly mistakes."
  },
  {
    stat: "50%",
    title: "Scalability and Growth",
    description:"Scale your business and grow your workforce with ease by leveraging our cloud-based HR and payroll solutions."
  }
]


const WhyHeriSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-4 pb-4 lg:py-20 section-6">
      <div className="flex flex-col items-center justify-center p-4 lg:justify-between lg:px-60">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-3xl font-bold text-center text-cyan-900 lg:max-w-[48%]">
            Hearness the power of Heri HR and payroll solutions to drive your organization forward.
          </h2>
          <p className="mt-4 text-sm text-center text-cyan-700 lg:max-w-[78%]">
            Heri is a cloud-based HR and payroll solution that helps businesses of all sizes streamline and manage processes related to employee onboarding, attendance tracking, payroll processing, and more.
            It provides a centralized database, which enables HR teams to store employee information and gain insights into business performance using analytics.
          </p>
        </div>
        <div className="flex flex-wrap justify-center w-full mt-8 lg:mt-0 lg:justify-between">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-full p-4 lg:w-[30%]">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-cyan-100">
                <span className="text-4xl font-bold text-center text-cyan-900">{reason.stat}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-center text-cyan-900">{reason.title}</h3>
              <p className="mt-3 text-sm text-center text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
        < div className="flex flex-col items-center justify-center w-full mt-20 lg:mt-20">
          <button className="px-4 py-2 text-xl rounded-md font-bold text-white transition duration-300 ease-in-out transform bg-orange-600 hover:bg-orange-700">
            Free Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyHeriSection;