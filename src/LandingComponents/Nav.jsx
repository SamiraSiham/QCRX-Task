import React from 'react'
import { useState } from 'react';
import logoWeb from '../images/full logo.png';
// import logoMobile from '../images/mobile logo.png';
import menu from '../icons/menu.svg';
import close from '../icons/close.svg';

const Nav = () => {

    const [imgSrc, setImgSrc] = useState(menu);
    const [isActive, setIsActive] = useState(false);
    const toggleMenu = (e) => {
        imgSrc === menu ? setImgSrc(close) : setImgSrc(menu);
        setIsActive(!isActive);
    }
    return (
        <header className='font-[Manrope] shadow-md w-full flex items-center justify-around p-1.5'>
            <nav className='flex justify-between items-center w-[90%]'>
                <div>
                    <img className='w-20' src={logoWeb} alt="" />
                </div>
                <div className={`md:static duration-500 absolute bg-white md:min-h-fit min-h-[60vh] left-0  md:w-auto w-full flex items-center px-5 transition-all ease-in-out ${isActive ? 'top-[55px]' : 'top-[-100%]'}`}>
                    <ul className='flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-6'>
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
                <div className='flex items-center gap-6'>
                    <button className='bg-white text-[#194894] rounded-full px-5 py-2'>Log in</button>
                    <button className='bg-[#194894] text-white rounded-full px-5 py-2'>Register</button>
                    <img onClick={(e) => toggleMenu(e)} name="menu" src={imgSrc} className='size-7 cursor-pointer md:hidden' alt="" />
                </div>
            </nav>
        </header>
    )
}

export default Nav