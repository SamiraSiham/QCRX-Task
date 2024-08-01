import React from 'react'
import { useState } from 'react';
import logoWeb from '../../images/full logo.png';
// import logoMobile from '../images/mobile logo.png';
import menu from '../../icons/menu.svg';
import close from '../../icons/close.svg';
import '../../css/nav.module.css'

const Nav = () => {

    const [imgSrc, setImgSrc] = useState(menu);
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = (e) => {
        imgSrc === menu ? setImgSrc(close) : setImgSrc(menu);
        setIsActive(!isActive);
    }
    return (
        <header className='font-[Manrope] md:text-[10pt] shadow-md w-full flex items-center justify-around'>
            <nav className='flex max-lg:justify-around max-md:justify-center justify-between max-md:gap-6 items-center md:w-[90%] w-full'>
                <div className='lg:w-1/5 md:max-lg:w-fit max-md:w-1/3 flex justify-around'>
                    <img className='lg:size-1/2 md:max-lg:size-1/2 max-md:size-2/3' src={logoWeb} alt="" />
                </div>
                <div className={`md:static duration-500 max-md:absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-2/3 w-full flex items-center justify-center transition-all ease-in-out ${isActive ? 'max-md:top-[55px]' : 'max-md:top-[-100%]'}`}>
                    <ul className='flex md:flex-row flex-col md:justify-center items-center md:gap-[2vw] gap-6'>
                        <li>
                            <a className='hover:text-[#194894] hover:underline' href="/">Home</a>
                        </li>
                        <li>
                            <a className='hover:text-[#194894] hover:underline' href="/">Catalog</a>
                        </li>
                        <li>
                            <a className='hover:text-[#194894] hover:underline' href="/">About</a>
                        </li>
                        <li>
                            <a className='hover:text-[#194894] hover:underline' href="/">Facility Tour</a>
                        </li>
                        <li>
                            <a className='hover:text-[#194894] hover:underline' href="/">Patients</a>
                        </li>
                        <li>
                            <a className='hover:text-[#194894] hover:underline' href="/">Providers</a>
                        </li>
                        <li>
                            <a className='hover:text-[#194894] hover:underline' href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center md:w-1/4 max-md:w-1/2 items-center gap-2'>
                    <button className='bg-white text-[#194894] rounded-full px-5 py-2 md:max-lg:size-1/2 max-md:size-1/2'>Log in</button>
                    <button className='bg-[#194894] text-white rounded-full px-5 py-2 md:max-lg:size-1/2 mx-lg:text-1/2'>Register</button>
                    <img onClick={(e) => toggleMenu(e)} name="menu" src={imgSrc} className='size-7 cursor-pointer md:hidden' alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Nav