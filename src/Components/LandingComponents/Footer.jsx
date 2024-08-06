import React from 'react'
import arrow from '../../icons/hero-arrow-icon.svg'
// import arrowBlack from '../../icons/arrow-black.svg'
import logo from '../../images/full logo.png'
import facebook from '../../icons/facebook.svg'
import instagram from '../../icons/instagram.svg'
import twitter from '../../icons/twitter.svg'
const Footer = () => {
    return (
        <div id='footer' className='flex flex-col'>
            <div className='flex flex-col md:flex-row mb-10 max-md:items-center max-md:gap-5'>
                {/* section 1 */}
                <div className="flex flex-col px-4 gap-2 md:w-1/3 max-md:w-full max-md:items-center justify-center">
                    <img src={logo} className='md:w-1/3 max-md:w-[70%]' alt="" />
                    <div className='text-3xl font-medium'>
                        <p>Want to see more ?</p>
                    </div>
                    <div className='text-lg'>
                        <p>Register to download our catalog</p>
                    </div>
                    <div>
                        <button className='bg-[#194894] text-white rounded-full px-5 py-2 flex flex-row items-center justify-center'>
                            Register
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div>
                {/* section 2 */}
                <div className="flex flex-row max-md:flex-wrap md:gap-10 max-md:gap-5 justify-center max-md:items-center md:w-2/3 max-md:text-xs max-md:w-[90%]">
                    <div className='flex flex-col md:w-1/4 max-md:w-full max-md:items-center'>
                        <div className='text-2xl font-medium'>
                            <p className='text-left'>Pages</p>
                        </div>
                        <div className='text-lg flex flex-col gap-3'>
                            <p className='max-md:text-center md:text-left'>Home</p>
                            <p className='max-md:text-center md:text-left'>About</p>
                            <p className='max-md:text-center md:text-left'>Catalog</p>
                            <p className='max-md:text-center md:text-left'>Facility Tour</p>
                            <p className='max-md:text-center md:text-left'>Patients</p>
                            <p className='max-md:text-center md:text-left'>Providers</p>
                            <p className='max-md:text-center md:text-left'>Contact Us</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/4 max-md:w-full max-md:items-center'>
                        <div className='text-2xl font-medium'>
                            <p>Catalog</p>
                        </div>
                        <div className='text-lg flex flex-col gap-3'>
                            <p className='max-md:text-center md:text-left'>Men's Health</p>
                            <p className='max-md:text-center md:text-left'>Women's Health</p>
                            <p className='max-md:text-center md:text-left'>Weight Loss</p>
                            <p className='max-md:text-center md:text-left'>Sexual Health</p>
                            <p className='max-md:text-center md:text-left'>IV & Vitamins</p>
                            <p className='max-md:text-center md:text-left'>Dermatology</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:w-1/4 max-md:w-full max-md:items-center'>
                        <div className='text-2xl font-medium'>
                            <p>Resources</p>
                        </div>
                        <div className='text-lg flex flex-col gap-3'>
                            <p className='max-md:text-center md:text-left'>Quality First</p>
                            <p className='max-md:text-center md:text-left'>Accreditations</p>
                            <p className='max-md:text-center md:text-left'>Blog</p>
                            <p className='max-md:text-center md:text-left'>Privacy Policy</p>

                        </div>
                    </div>
                    <div className='flex flex-col max-md:items-center w-1/4'>
                        <div className='text-2xl font-medium'>
                            <p>Address</p>
                        </div>
                        <div className='text-lg flex flex-col gap-3 max-md:items-center'>
                            <p className='max-md:text-center md:text-left'>801 S. Rancho Dr. Suite E7 Las Vegas, NV 89106</p>
                            <p className='max-md:text-center md:text-left'>702-984-6640</p>
                            <p className='max-md:text-center md:text-left'>info@QCRxusa.com</p>
                            <p className='flex flex-row gap-3 max-md:justify-center'>
                                <img src={twitter} className='bg-[#194894] rounded-full w-[20%] p-2' alt="" />
                                <img src={facebook} className='bg-[#194894] rounded-full w-[20%] p-2' alt="" />
                                <img src={instagram} className='bg-[#194894] rounded-full w-[20%] p-2' alt="" />

                            </p>

                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='flex flex-row md:justify-around mt-10 mb-5'>
                <div className="shrink-0 h-px bg-[#194894] bg-opacity-[50%] w-[90vw]" />
            </div>
            <div className='flex flex-row md:justify-around'>
                Quality Compounding Rx of America © 2024    |    All rights reserved    |    Powered by Webloo
            </div> */}

        </div>
    )
}

export default Footer