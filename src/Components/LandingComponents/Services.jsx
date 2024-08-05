import React from 'react'
import arrow from '../../icons/hero-arrow-icon.svg'
import image from '../../images/services/images.png'
import c1 from '../../images/services/customer1.png'
import c2 from '../../images/services/customer2.png'
import c3 from '../../images/services/customer3.png'
import c4 from '../../images/services/customer4.png'
import c5 from '../../images/services/customer5.png'
import c6 from '../../images/services/customer6.png'
import c7 from '../../images/services/customer7.png'
import c8 from '../../images/services/customer8.png'
const Services = () => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center' id='services-section'>
            <h1 className='text-3xl'>
                White Label Services
            </h1>
            <div className='my-5 w-1/2 max-md:text-center md:w-[80%] text-justify p-0'>
                Our expert team can help you develop your own line of Beverly Hills Cosmetics or any other product that you can imagine.
                Contact us today to schedule a consult with of our branding experts to help make your vision a reality.
            </div>
            <button className='bg-[#194894] text-white rounded-full px-5 py-2 flex flex-row'>
                View our catalog
                <img src={arrow} alt="" />
            </button>
            <div className='mt-10'>
                <img src={image} alt="" />
            </div>
            {/* customers */}
            <div className='mt-2 flex flex-col lg:items-center max-md:w-[80%]'>
                <h2 className='text-xl text-center mb-3'>Some of our customers</h2>
                <div className='flex space-x-16 overflow-hidden md:w-[80%] max-md:w-[90%] group max-md:items-center max-md:justify-center'>
                    <div className='flex flex-row items-center md:gap-10  justify-center lg:items-center animate-loop-scroll space-x-16 group-hover:paused max-md:w-[80%]'>
                        <img className=' size-1/2 md:max-lg:size-1/4' src={c1} alt="" />
                        <img className=' size-1/2 md:max-lg:size-1/4' src={c2} alt="" />
                        <img className=' size-1/2 md:max-lg:size-1/4' src={c3} alt="" />
                        <img className=' size-1/2 md:max-lg:size-1/4' src={c4} alt="" />
                        <img className=' size-1/2 md:max-lg:size-1/4' src={c5} alt="" />
                        <img className=' size-1/2 md:max-lg:size-1/4' src={c6} alt="" />
                        <img className=' size-1/2 md:max-lg:size-1/4' src={c7} alt="" />
                        <img className=' size-1/2 md:max-lg:size-1/4' src={c8} alt="" />
                    </div>

                </div>
            </div>
            <div className='flex flex-row md:justify-around my-10'>
                <div className="shrink-0 h-px bg-[#194894] bg-opacity-[50%] w-[90vw]" />
            </div>
        </div>
    )
}

export default Services