import React from 'react'
import arrow from '../../icons/hero-arrow-icon.svg'
import map from '../../images/map.png'
const Map = () => {
    return (
        <div>
            <div className='flex flex-col gap-3 items-center justify-center mb-10'>
                <h1 className='text-4xl font-medium w-1/2 text-center font-Georgia'>
                    Proudly serving an ever-expanding list of United States
                </h1>
                <div className='my-5 w-1/2 text-center md:w-[80%] p-0'>
                    Don't see your state? Tell us where you are.
                </div>
                <button className='bg-[#194894] text-white rounded-full px-10 py-2 flex flex-row'>
                    Contact us
                    <img src={arrow} alt="" />
                </button>
                <div className='mt-10 w-2/3'>
                    <img src={map} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Map