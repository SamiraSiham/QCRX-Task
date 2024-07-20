import React from 'react'
import logoWeb from '../images/full logo.png';
import logoMobile from '../images/mobile logo.png';
import { isMobile } from 'react-device-detect';
const Navbar = () => {
  // const imageSrc = isMobile ? logoMobile : logoWeb;
  // const imageStyle = isMobile;
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        {/* <div className='md:flex bg-white py-4'>
          <img src={imageSrc} alt="Website logo" />
        </div> */}
        <h1>
          Navbar
        </h1>
    </div>
  )
}

export default Navbar