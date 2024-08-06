import React from 'react'
// import bgImg from '../../images/standards-bg.png'
import img from '../../images/standards.png'
import arrow from '../../icons/arrow-blue.svg'
const Standards = () => {
    return (
        <div className='md:flex md:flex-row md:justify-center'>
            <div className='mx-auto flex flex-col md:flex-row gap-0 md:gap-0 w-[90%] md:w-[95%] max-md:items-center justify-center md:justify-center bg-[#194894] md:m-10 rounded-xl'>

                <div className='w-full md:w-1/2 md:rounded-s-xl max-md:rounded-t-xl bg-cover bg-center flex flex-col text-center md:text-justify md:p-9 md:pb-12 max-md:p-3 gap-10' id='standards-section1'>
                    <h1 className='text-4xl section1-content font-Georgia'>
                        Setting New Standards: Elevating Compounding Quality
                    </h1>
                    <div className='flex flex-col justify-start section1-content'>
                        <h3 className='text-xl'>
                            USP &lt;795&gt; Non-Sterile Compounding
                        </h3>
                        <ul className='list-disc list-inside text-justify'>
                            <li>
                                Establishes guidelines to minimize errors
                            </li>
                            <li>
                                Provides requirements for final product quality
                            </li>
                            <li>
                                Packaging & labeling requirement for final products
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-start section1-content'>
                        <h3 className='text-xl'>
                            USP &lt;797&gt; Sterile Compounding
                        </h3>
                        <ul className='list-disc list-inside text-justify'>
                            <li>
                                Specifically addresses sterile compounding
                            </li>
                            <li>
                                Establishes positive & negative pressure cleanrooms
                            </li>
                            <li>
                                New requirements for sterility testing
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col justify-start section1-content'>
                        <h3 className='text-xl'>
                            USP &lt;800&gt; Handling of Hazardous Drugs
                        </h3>
                        <ul className='list-disc list-inside text-justify'>
                            <li>
                                Improved safety for pharmacy staff
                            </li>
                            <li>
                                Requires separation of hazardous and non-hazardous products
                            </li>
                            <li>
                                Specifically addresses handling of hazardous materials
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col max-md:items-center md:items-start'>
                        <button className='bg-white rounded-xl text-[#194894] p-2 flex flex-row gap-2 items-center'>
                            Quality first
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div>
                <div className='md:w-1/2 w-full'>
                    <img src={img} alt="" className='w-full md:rounded-e-xl max-md:rounded-b-xl h-full' />
                </div>

            </div>
        </div>
    )
}

export default Standards