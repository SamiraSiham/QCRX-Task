import React from 'react'
import arrow from '../../icons/hero-arrow-icon.svg'
import img1 from '../../images/hero/img1.jpg';
import img2 from '../../images/hero/img2.jpg';
import img3 from '../../images/hero/img3.jpg';
import img4 from '../../images/hero/img4.jpg';
import img5 from '../../images/hero/img5.png';
import img6 from '../../images/hero/img6.png';
import '../../css/App.css'
const Hero = () => {
    return (
        <div className='font-[Manrope] flex flex-col items-center justify-center'>
            <div className='w-1/4 flex flex-row items-center justify-center text-3xl mt-10 md:mt-16'>
                <h1>
                    Customized health solutions, always.
                </h1>
            </div>
            <div className='mt-16 md:me-16 w-full flex flex-row items-center justify-center'>
                <button className='bg-[#194894] text-white rounded-full px-5 py-2 flex flex-row'>
                    View our catalog
                    <img src={arrow} alt="" />
                </button>
            </div>
            <div className="mt-3 relative w-[90%] mx-auto overflow-hidden" id="container">

                <div id="carousel-hero" className="flex gap-3 car p-4">

                    {/* <div className="size-1/3 flex-shrink-0 p-6 bg-white rounded-lg shadow-md"> */}
                        <img className='size-1/3 rounded-xl' id='pic1' src={img1} alt="" />
                    {/* </div> */}

                    {/* <div className="size-1/3 flex-shrink-0 p-6 bg-white rounded-lg shadow-md"> */}
                        <img className='size-1/3 rounded-xl' id='pic2' src={img2} alt="" />
                    {/* </div> */}

                    {/* <div className="size-1/3 flex-shrink-0 p-6 bg-white rounded-lg shadow-md"> */}
                        <img className='size-1/3 rounded-xl' id='pic3' src={img3} alt="" />
                    {/* </div> */}

                    {/* <div className="size-1/3 flex-shrink-0 p-6 bg-white rounded-lg shadow-md"> */}
                        <img className='size-1/3 rounded-xl' id='pic4' src={img4} alt="" />
                    {/* </div> */}

                    {/* <div className="size-1/3 flex-shrink-0 p-6 bg-white rounded-lg shadow-md"> */}
                        <img className='size-1/3 rounded-xl' id='pic5' src={img5} alt="" />
                    {/* </div> */}

                    {/* <div className="size-1/3 flex-shrink-0 p-6 bg-white rounded-lg shadow-md"> */}
                        <img className='size-1/3 me-2 rounded-xl' id='pic6' src={img6} alt="" />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Hero