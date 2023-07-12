import React from "react";

const Banner = () => {
  return(
    <div className="flex flex-col items-center justify-center bg-gray-200 p-4">
      <span className="text-sm text-gray-700 dark:text-gray-300 w-full lg:px-40">
        They trust Heri HR&Payroll solutions:
      </span>
      <ul className="flex flex-wrap justify-around items-center mt-4 w-[90%] lg:w-[50%]">
        <li className="flex items-center justify-center">
          <img src="https://res.cloudinary.com/dfhv5fpup/image/upload/v1689155451/heri%20hr/ngeni_qja4rr.png" alt="ngeni" className="h-12 w-12" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://res.cloudinary.com/dfhv5fpup/image/upload/v1689155450/heri%20hr/exuus_rtcd48.webp" alt="exuus" className="h-12 w-12" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://res.cloudinary.com/dfhv5fpup/image/upload/v1689155451/heri%20hr/National_Bank_of_Rwanda_logo_h9upag.png" alt="bnr" className="h-12 w-12" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://cdn.worldvectorlogo.com/logos/airbnb-2.svg" alt="airbnb" className="h-12 w-12" />
        </li>
      </ul>
    </div>
  )
}

export default Banner;