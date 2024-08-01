import React from 'react'
import logo1 from '../../images/footer/logo1.png'
import logo2 from '../../images/footer/logo2.png'
import logo3 from '../../images/footer/logo3.png'
import arrow from '../../icons/hero-arrow-icon.svg'
const Accreditation = () => {
    return (
        <div>
            <div className='md:mx-10 flex flex-col gap-3 items-center justify-center md:flex-row md:justify-between md:w-[90%]'>
                <div className='flex flex-col items-center md:flex-row md:items-center'>
                    <h2 className='md:text-[35px] max-md:text-[30px] font-normal font-Georgia'>Our Accreditation</h2>
                </div>
                <div className='flex flex-col gap-8 items-center md:flex-row md:gap-8 md:items-center'>
                    <img className='size-1/3 md:size-2/3' src={logo1} alt="" />
                    <img className='size-1/3 md:size-2/3' src={logo2} alt="" />
                    <img className='size-1/3 md:size-2/3' src={logo3} alt="" />
                </div>
                <div className='flex flex-col items-center md:flex-row md:items-center'>
                    <button className='bg-[#194894] text-white rounded-full px-5 py-2 flex flex-row'>
                        Learn more
                        <img src={arrow} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Accreditation