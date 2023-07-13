import WhiteLogo from "assets/img/home/white_logo.png";

import {
  CheckIcon,
} from "@heroicons/react/24/solid";

const links = [
  {
    title: "Ressources",
    links: [
      {
        title: "Blog",
        url: "/blog",
      },
      {
        title: "Help Center",
        url: "/help",
      },
      {
        title: "Contact Us",
        url: "/contact",
      },
    ]
  },
  {
    title: "Company",
    links: [
      {
        title: "About Us",
        url: "/about",
      },
      {
        title: "Careers",
        url: "/careers",
      },
      {
        title: "Partners",
        url: "/partners",
      },
    ]
  },
  {
    title: "Legal",
    links: [
      {
        title: "Terms of Service",
        url: "/terms",
      },
      {
        title: "Privacy Policy",
        url: "/privacy",
      },
      {
        title: "Security",
        url: "/security",
      },
    ]
  },
  {
    title: "Partner with us",
    links: [
      {
        title: "Become a Partner",
        url: "/become_partner",
      },
      {
        title: "Partner Portal",
        url: "/partner_portal",
      },
    ]
  }
]

const LinksSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-sky-800 py-4 lg:py-20 border-none">
      <div className="flex flex-col items-center justify-center p-4 lg:justify-between w-full lg:px-60 gap-8">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-4 lg:gap-8 w-full">
          <img src={WhiteLogo} alt="logo" className="w-20  lg:w-25" />
          <div className="flex flex-col justify-around gap-4">
            <p className='text-white text-center text-sm'> Signup to see Heri in action. </p>
            <form className="flex flex-col lg:flex-row items-center justify-around gap-2">
              <input type="email" placeholder="Enter your email" className="w-60 h-10 text-cyan-900 text-center" />
              <button className="w-20 h-10 bg-cyan-500 text-white"> See Heri </button>
            </form>
            <div className="flex flex-wrap gap-2 text-sm text-white ga-4">
              <p className='flex gap-1'><CheckIcon className="w-5 h-5 text-green-500" /> No credit card required</p>
              <p className='flex gap-1'><CheckIcon className="w-5 h-5 text-green-500" /> Free Demo</p>
            </div>
          </div>
        </div>
        <div className="flex block w-full h-px my-4 bg-gray-700"></div>
        <div className="flex flex-wrap w-full gap-4 lg:gap-8">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col w-[50%] md:w-[30%] lg:w-[20%] p-4">
              <h3 className="text-gray-300 underline">{link.title}</h3>
              <div className="flex flex-col w-full mt-4">
                {link.links.map((link, index) => (
                  <a key={index} href={link.url} className="text-sm text-gray-300 hover:text-cyan-500">{link.title}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinksSection;
