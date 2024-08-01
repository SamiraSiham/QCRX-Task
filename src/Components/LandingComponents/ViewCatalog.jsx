import React from 'react'
import arrowBlack from '../../icons/arrow-black.svg'
import '../../css/viewcatalog.css';
const ViewCatalog = () => {
    return (
        <div className="flex flex-col items-center" >
            <div id="catalog-bg" className='py-20 my-5 md:my-10 mb-10 flex flex-col justify-center items-center rounded-xl md:w-[90%] max-md:w-[90%] text-white'>
                <div className='w-[40%] flex-col flex justify-center items-center text-center gap-10'>
                    <h1 className='text-4xl font-Georgia'>
                        Discover the perfect synergy between health and partnership.
                    </h1>
                    <p className='text-lg font-[Manrope]'>
                        Click to unlock a treasure trove of insights and products that elevate both your well-being and relationships.
                    </p>

                </div>
                <div className='w-full max-md:items-center justify-center max-md:mt-4 my-4 mx-auto flex'>
                    <button className='font-[Manrope] bg-white rounded-full text-black p-2 flex flex-row gap-1 lg:text-lg md:max-lg:text-xs max-md:w-[40%] max-md:gap-0 justify-center items-center'>
                        Register for full catalog
                        <img src={arrowBlack} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewCatalog