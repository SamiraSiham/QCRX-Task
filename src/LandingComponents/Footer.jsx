import React from 'react'
import arrow from '../icons/hero-arrow-icon.svg'
import arrowBlack from '../icons/arrow-black.svg'
import logo from '../images/full logo.png'
import facebook from '../icons/facebook.svg'
import instagram from '../icons/instagram.svg'
import twitter from '../icons/twitter.svg'
const Footer = () => {
    return (
        <div id='footer' className='flex flex-col'>
            <div className="flex flex-col">
                <div className='md:mx-10 my-5 md:my-10 mb-10 flex flex-col justify-center items-center rounded-xl py-20 md:w-[90%] bg-[#194894] text-white'>
                    <div className='w-[40%] flex-col flex justify-center items-center text-center gap-10'>
                        <h1 className='text-4xl'>
                            Discover the perfect synergy between health and partnership.
                        </h1>
                        <p className='text-lg'>
                            Click to unlock a treasure trove of insights and products that elevate both your well-being and relationships.
                        </p>
                        <button className='bg-white rounded-xl text-black p-2 flex flex-row gap-2 text-lg'>
                            Register for full catalog
                            <img src={arrowBlack} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row mb-10 max-md:items-center'>
                <div className="flex flex-col px-4 gap-2 w-1/3 max-md:items-center justify-center">
                    <img src={logo} className='md:w-1/3 w-full' alt="" />
                    <div className='text-3xl font-medium'>
                        <p>Want to see more ?</p>
                    </div>
                    <div className='text-lg'>
                        <p>Register to download our catalog</p>
                    </div>
                    <div>
                        <button className='bg-[#194894] text-white rounded-full px-5 py-2 flex flex-row'>
                            Register
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:gap-10 justify-center max-md:items-center w-2/3">
                    <div className='flex flex-col'>
                        <div className='text-2xl font-medium'>
                            <p>Pages</p>
                        </div>
                        <div className='text-lg flex flex-col gap-3'>
                            <p>Home</p>
                            <p>About</p>
                            <p>Catalog</p>
                            <p>Facility Tour</p>
                            <p>Patients</p>
                            <p>Providers</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-2xl font-medium'>
                            <p>Catalog</p>
                        </div>
                        <div className='text-lg flex flex-col gap-3'>
                            <p>Men's Health</p>
                            <p>Women's Health</p>
                            <p>Weight Loss</p>
                            <p>Sexual Health</p>
                            <p>IV & Vitamins</p>
                            <p>Dermatology</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-2xl font-medium'>
                            <p>Resources</p>
                        </div>
                        <div className='text-lg flex flex-col gap-3'>
                            <p>Quality First</p>
                            <p>Accreditations</p>
                            <p>Blog</p>
                            <p>Privacy Policy</p>

                        </div>
                    </div>
                    <div className='flex flex-col max-md:items-center'>
                        <div className='text-2xl font-medium'>
                            <p>Address</p>
                        </div>
                        <div className='text-lg flex flex-col gap-3 max-md:items-center'>
                            <p className=''>801 S. Rancho Dr. Suite E7 Las Vegas, NV 89106</p>
                            <p className='flex flex-col'>702-984-6640</p>
                            <p className='flex flex-col'>info@QCRxusa.com</p>
                            <p className='flex flex-row gap-3'>
                                <img src={twitter} className='bg-[#194894] rounded-full w-[10%] p-2' alt="" />
                                <img src={facebook} className='bg-[#194894] rounded-full w-[10%] p-2' alt="" />
                                <img src={instagram} className='bg-[#194894] rounded-full w-[10%] p-2' alt="" />

                            </p>

                        </div>
                    </div>
                </div>

            </div>
            <div className='flex flex-row md:justify-around mt-10 mb-5'>
                <div className="shrink-0 h-px bg-[#194894] bg-opacity-[50%] w-[90vw]" />
            </div>
            <div className='flex flex-row md:justify-around'>
                Quality Compounding Rx of America © 2024    |    All rights reserved    |    Powered by Webloo
            </div>

        </div>
    )
}

export default Footer