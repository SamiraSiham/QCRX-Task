import React from 'react'
import img1 from '../../images/Specialisation/image 1.png'
import img2 from '../../images/Specialisation/image 2.png'
import img3 from '../../images/Specialisation/image 3.png'
import img4 from '../../images/Specialisation/image 4.png'
import img5 from '../../images/Specialisation/image 5.png'
import img6 from '../../images/Specialisation/image 6.png'
import arrow from '../../icons/arrow-small.svg'
import '../../css/carouselSpe.css'
const SpeTest2 = () => {
    return (
        <div className='font-[Manrope] mt-20 mb-10 w-full bg-white md:mt-10 md:w-full'>
            <div className='mt-6 md:w-full flex flex-col md:flex-row'>
                {/* first part */}
                <div className="flex flex-col items-center md:items-start px-12 py-20 w-full md:w-[50%] text-black bg-white md:px-5">
                    <div className="mt-24 text-5xl leading-10 max-md:mt-10 max-md:text-4xl max-md:leading-10">
                        We specialize in medications for
                    </div>
                    <div className="mt-10 text-base leading-6 max-md:mt-10">
                        Nec purus adipiscing pellentesque ultrices in viverra
                        amet. Sit egestas mi platea nisl est.
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-3 mt-10 text-sm font-medium text-white">
                        <button className="justify-center px-5 py-4 bg-blue-900 rounded-3xl">
                            Register as Provider
                        </button>
                        <button className="justify-center px-5 py-4 bg-cyan-500 rounded-3xl shadow-sm ">
                            Register as Patient
                        </button>
                    </div>
                </div>
                {/* second part */}
                <div className="flex flex-col items-center md:items-start px-12 w-full md:w-[50%] text-black bg-white border-solid md:px-5">
                    <div id='carousel-spe' className="flex flex-col md:flex-row gap-20 ps-2 w-[100%] md:w-[80%] overflow-hidden">
                        <div id='carousel-track-spe' className=''>
                            {/* image 1 */}
                            <div className="card flex relative flex-col self-stretch px-6 pt-20 pb-12 my-auto md:text-2xl font-medium text-blue-900 max-md:px-0 max-md:mt-0">
                                <img
                                    src={img1}
                                    alt=""
                                    className="object-cover absolute inset-0 size-full rounded-xl"
                                />
                                {/* <div className="flex relative gap-3 md:gap-5 px-7 py-3 mt-80 w-[90%] md:h-[20%] h-[15%] bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10"> */}
                                <div className="flex relative items-center md:gap-5 px-7 py-3 mt-80 w-[100%] md:h-[20%] h-[15%] bg-white rounded-3xl">
                                    <div className="flex-auto my-auto md:w-[85%] w-[10%] md:text-2xl text-sm">Men's Health</div>
                                    <button className='md:w-12 bg-[#194894] rounded-full flex items-center justify-center'>
                                        <img
                                            alt=""
                                            src={arrow}
                                            className="md:w-8 w-4"
                                        />
                                    </button>
                                </div>
                            </div>
                            {/* image 2 */}
                            <div className="card flex relative flex-col px-6 pt-20 pb-12 my-auto text-xl font-medium text-blue-900 max-md:px-0 max-md:mt-0 md:w-[50%]">
                                <img
                                    src={img2}
                                    alt=""
                                    className="object-cover absolute inset-0 size-full rounded-xl"
                                />
                                <div className="flex relative items-center justify-start md:gap-5 gap-4 px-7 py-3 mt-80 w-[100%] md:h-[20%] h-[15%] bg-white rounded-3xl">
                                    <div className="flex-auto my-auto md:w-[85%] w-[10%] md:text-2xl text-sm">Women's Health</div>
                                    <button className='md:w-12 w-5 bg-[#194894] rounded-full flex items-center justify-center'>
                                        <img
                                            src={arrow}
                                            alt=""
                                            className="w-8"
                                        />
                                    </button>
                                </div>
                            </div>
                            {/* image 3 */}
                            <div className="card flex relative flex-col px-6 pt-20 pb-12 my-auto text-xl font-medium text-blue-900 max-md:px-0 max-md:mt-0 md:w-[50%]">
                                <img
                                    src={img3}
                                    alt=""
                                    className="object-cover absolute inset-0 size-full rounded-xl"
                                />
                                <div className="flex relative items-center md:gap-5 px-7 py-3 mt-80 w-[100%] md:h-[20%] h-[15%] bg-white rounded-3xl">
                                    <div className="flex-auto my-auto md:w-[85%] w-[10%] md:text-2xl text-sm">Weight loss</div>
                                    <button className='md:w-12 w-[10%] bg-[#194894] rounded-full flex items-center justify-center'>
                                        <img
                                            src={arrow}
                                            alt=""
                                            className="w-8"
                                        />
                                    </button>
                                </div>
                            </div>
                            {/* image 4 */}
                            <div className="card flex relative flex-col px-6 pt-20 pb-12 my-auto text-xl font-medium text-blue-900 max-md:px-0 max-md:mt-0 md:w-[50%]">
                                <img
                                    src={img4}
                                    alt=""
                                    className="object-cover absolute inset-0 size-full rounded-xl"
                                />
                                <div className="flex relative items-center justify-start md:gap-5 gap-4 px-7 py-3 mt-80 w-[100%] md:h-[20%] h-[15%] bg-white rounded-3xl">
                                    <div className="flex-auto my-auto md:w-[85%] w-[10%] md:text-2xl text-sm">Sexual health</div>
                                    <button className='md:w-12 w-5 bg-[#194894] rounded-full flex items-center justify-center'>
                                        <img
                                            src={arrow}
                                            alt=""
                                            className="w-8"
                                        />
                                    </button>
                                </div>
                            </div>
                            {/* image 5 */}
                            <div className="card flex relative flex-col px-6 pt-20 pb-12 my-auto text-xl font-medium text-blue-900 max-md:px-0 max-md:mt-0 md:w-[50%]">
                                <img
                                    src={img5}
                                    alt=""
                                    className="object-cover absolute inset-0 size-full rounded-xl"
                                />
                                
                                <div className="flex relative items-center justify-start md:gap-5 gap-4 px-7 py-3 mt-80 w-[100%] md:h-[20%] h-[15%] bg-white rounded-3xl">
                                    <div className="flex-auto my-auto md:w-[85%] w-[10%] md:text-2xl text-sm">IV & Vitamins</div>
                                    <button className='md:w-12 w-5 bg-[#194894] rounded-full flex items-center justify-center'>
                                        <img
                                            src={arrow}
                                            alt=""
                                            className="w-8"
                                        />
                                    </button>
                                </div>
                            </div>
                            {/* image 6 */}
                            <div className="card flex relative flex-col px-6 pt-20 pb-12 my-auto text-xl font-medium text-blue-900 max-md:px-0 max-md:mt-0 md:w-[50%]">
                                <img
                                    src={img6}
                                    alt=""
                                    className="object-cover absolute inset-0 size-full rounded-xl"
                                />
                                
                                <div className="flex relative items-center justify-center md:gap-5 gap-4 px-7 py-3 mt-80 w-[100%] md:h-[20%] h-fit bg-white rounded-3xl">
                                    <div className="flex-auto my-auto md:w-[85%] w-[40%] break-words flex-wrap md:text-2xl text-sm">Dermatology/Beauty</div>
                                    <button className='md:w-12 w-5 bg-[#194894] rounded-full flex items-center justify-center'>
                                        <img
                                            src={arrow}
                                            alt=""
                                            className="w-8"
                                        />
                                    </button>
                                </div>
                            </div>
                            {/* image 7 */}
                            <div id='last-slide' className="flex relative flex-col gap-10 h-full justify-center mx-24 font-medium md:w-[40vw]">
                                <div className='flex flex-col items-center justify-center gap-10 h-full'>
                                    <div className='text-black'>
                                        And so much more
                                    </div>
                                    <div className="flex relative gap-3 md:gap-5 px-7 py-3 w-[100%] md:w-[100%] h-fit rounded-3xl">
                                        <button className='bg-[#194894] text-white rounded-full flex items-center justify-center p-2 text-sm'>
                                            View our catalog
                                            <img
                                                src={arrow}
                                                alt=""
                                                className="w-8"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SpeTest2