import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-sky-800 py-4 border-t-2 border-sky-900">
      <div className="flex items-center justify-between p-4 lg:justify-between w-full lg:px-60 gap-8">
        <p className="text-sm text-center text-gray-300 lg:max-w-[48%]">
          {`© Heri HR Technologies, Inc ${new Date().getFullYear()}. All rights reserved.`}
        </p>
        {/* Social Media Links */}
        <div className="flex items-center justify-center mt-8 lg:mt-0 lg:justify-between gap-4 lg:gap-8">
          <a href="https://www.facebook.com/HeriHR" target="_blank" rel="noreferrer" className='bg-white rounded-full p-2'>
            <FaFacebookF className="text-xl text-cyan-800 transition duration-300 ease-in-out transform hover:text-cyan-900" />
          </a>
          <a href="https://www.instagram.com/herihr/" target="_blank" rel="noreferrer" className='bg-white rounded-full p-2'>
            <FaInstagram className="text-xl text-cyan-800 transition duration-300 ease-in-out transform hover:text-cyan-900" />
          </a>
          <a href="https://www.linkedin.com/company/herihr/" target="_blank" rel="noreferrer" className='bg-white rounded-full p-2'>
            <FaLinkedinIn className="text-xl text-cyan-800 transition duration-300 ease-in-out transform hover:text-cyan-900" />
          </a>
          <a href="https://twitter.com/HeriHR" target="_blank" rel="noreferrer" className='bg-white rounded-full p-2'>
            <FaTwitter className="text-xl text-cyan-800 transition duration-300 ease-in-out transform hover:text-cyan-900" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer ;
