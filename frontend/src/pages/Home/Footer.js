import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {


  return (
    <div className='py-10'>
      <div className='h-[1px] w-full bg-gray-700'></div>
      <div className='flex items-center justify-center flex-col mt-10 opacity-70'>
        <h1 className='text-white'>Designed & Developed By</h1>
        {/* Using Link for internal navigation */}
        <Link to='https://sridharsportfolio.vercel.app' target='_blank' className='text-tertiary cursor-pointer hover:text-blue-600'>
          Sridhar.C
        </Link>
      </div>
     
    </div>
  );
};

export default Footer;
