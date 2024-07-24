import React from 'react'
import logoWeb from '../images/full logo.png';
import logoMobile from '../images/mobile logo.png';
import { isMobile } from 'react-device-detect';
const Navbar = () => {
  const imageSrc = isMobile ? logoMobile : logoWeb;
  // const imageStyle = isMobile ? {width : '50%' , height: '50%'} : {width: '50%', height: '50%'};
  return (
    <div className='font-[Manrope] shadow-md h-16 w-full flex items-center justify-around p-1.5'>
        
          {/* <img src={imageSrc} style={imageStyle} className={isMobile ? '' : 'size-2'} alt="Website logo" /> */}

        <div className='w-1/4 h-full py-0 my-0'>
          {/* <h2>test</h2> */}
          <img src={imageSrc} className='ps-12 w-2/3 h-full p-0' alt="Website logo" />
        </div>

        
        <nav className='w-1/2 space-x-6'>
          <a className='hover:text-[#194894] hover:underline' href="/">Home</a>
          <a className='hover:text-[#194894] hover:underline' href="/">Catalog</a>
          <a className='hover:text-[#194894] hover:underline' href="/">About</a>
          <a className='hover:text-[#194894] hover:underline' href="/">Facility Tour</a>
          <a className='hover:text-[#194894] hover:underline' href="/">Patients</a>
          <a className='hover:text-[#194894] hover:underline' href="/">Providers</a>
          <a className='hover:text-[#194894] hover:underline' href="/">Contact Us</a>
        </nav>
        <div className='w-1/4 space-x-8 flex justify-end pe-5'>
          <button className='bg-white space-x-0 text-[#194894] rounded-full px-5 py-2'>Log in</button>
          <button className='bg-[#194894] text-white rounded-full px-5 py-2'>Register</button>
        </div>
    </div>
  )
}

export default Navbar