import React from 'react'
import img1 from '../images/Specialisation/image 1.png'
import img2 from '../images/Specialisation/image 2.png'
import arrow from '../icons/arrow-small.svg'
import '../carouselSpe.css'
const SpeTest = () => {
    return (
        <div className="self-stretch mt-20 mb-20 w-full bg-white max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[66%] md:w-full max-md:ml-0 max-md:w-full">
                    <div className="grow px-0.5 max-md:mt-6 max-md:max-w-full">
                        <div className="flex gap-5 flex-col md:flex-row max-md:gap-0 ">
                            <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col items-start px-12 py-20 w-full text-black bg-white border border-black border-solid md:px-5 md:max-w-full">
                                    <div className="mt-24 text-5xl leading-10 max-md:mt-10 max-md:text-4xl max-md:leading-10">
                                        We specialize in medications for
                                    </div>
                                    <div className="mt-10 text-base leading-6 max-md:mt-10">
                                        Nec purus adipiscing pellentesque ultrices in viverra
                                        amet. Sit egestas mi platea nisl est.
                                    </div>
                                    <div className="flex gap-3 mt-10 text-sm font-medium text-white">
                                        <div className="justify-center px-5 py-4 bg-blue-900 rounded-3xl border border-black border-solid">
                                            Register as Provider
                                        </div>
                                        <div className="justify-center px-5 py-4 bg-cyan-500 rounded-3xl border border-black border-solid shadow-sm ">
                                            Register as Patient
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id='carousel' className="flex flex-col md:flex-row md:gap-20 ps-2 w-[100%] max-md:ml-0 md:w-[80%] overflow-hidden">
                                <div id='carousel-track'>
                                    {/* image 1 */}
                                    <div className="card md:size-1/3 flex relative flex-col self-stretch px-6 pt-20 pb-12 my-auto md:text-2xl font-medium text-blue-900 max-md:px-0 max-md:mt-0">
                                        <img
                                            src={img1}
                                            className="object-cover absolute inset-0 size-full rounded-xl"
                                        />
                                        <div className="flex relative gap-3 md:gap-5 px-7 py-3 mt-80 w-[90%] h-[20%] bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                                            <div className="flex-auto my-auto w-[85%]">Men's Health</div>
                                            <button className='md:w-12 w-[15%] bg-[#194894] rounded-full flex items-center justify-center'>
                                                <img
                                                    src={arrow}
                                                    className="w-8"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {/* image 2 */}
                                    <div className="card flex relative flex-col px-6 pt-20 pb-12 my-auto text-xl font-medium text-blue-900 max-md:px-0 max-md:mt-0 md:w-[50%]">
                                        <img
                                            src={img2}
                                            className="object-cover absolute inset-0 size-full rounded-xl"
                                        />
                                        <div className="flex relative gap-3 md:gap-5 px-7 py-3 mt-80 w-[100%] md:w-[90%] h-fit bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                                            <div className="flex-auto my-auto w-[85%]">Women's Health</div>
                                            <button className='md:w-12 w-[10%] bg-[#194894] rounded-full flex items-center justify-center'>
                                                <img
                                                    src={arrow}
                                                    className="w-8"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    {/* image 3 */}
                                    {/* <div className="card flex relative flex-col self-stretch px-6 pt-20 pb-12 my-auto text-2xl font-medium leading-10 text-blue-900 aspect-[0.73] max-md:px-0 max-md:mt-0 md:w-[50%]">
                                        <img
                                            src={img1}
                                            className="object-cover absolute inset-0 size-full rounded-xl"
                                        />
                                        <div className="flex relative gap-3 md:gap-5 px-7 py-3 mt-80 w-[90%] h-[20%] bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                                            <div className="flex-auto my-auto w-[85%]">Men's Health</div>
                                            <button className='md:w-12 w-[15%] bg-[#194894] rounded-full flex items-center justify-center'>
                                                <img
                                                    src={arrow}
                                                    className="w-8"
                                                />
                                            </button>
                                        </div>
                                    </div> */}
                                    {/* image 4 */}
                                    {/* <div className="card flex relative flex-col px-6 pt-20 pb-12 my-auto text-2xl font-medium leading-10 text-blue-900 aspect-[0.73] max-md:px-0 max-md:mt-0 md:w-[50%]">
                                        <img
                                            src={img2}
                                            className="object-cover absolute inset-0 size-full rounded-xl"
                                        />
                                        <div className="flex relative gap-3 md:gap-5 px-7 py-3 mt-80 w-[90%] h-[20%] bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                                            <div className="flex-auto my-auto w-[85%]">Women's Health</div>
                                            <button className='md:w-12 w-[15%] bg-[#194894] rounded-full flex items-center justify-center'>
                                                <img
                                                    src={arrow}
                                                    className="w-8"
                                                />
                                            </button>
                                        </div>
                                    </div> */}
                                    {/* image 5 */}
                                    {/* <div className="card flex relative flex-col self-stretch px-6 pt-20 pb-12 my-auto text-2xl font-medium leading-10 text-blue-900 aspect-[0.73] max-md:px-0 max-md:mt-0 md:w-[50%]">
                                        <img
                                            src={img1}
                                            className="object-cover absolute inset-0 size-full rounded-xl"
                                        />
                                        <div className="flex relative gap-3 md:gap-5 px-7 py-3 mt-80 w-[90%] h-[20%] bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                                            <div className="flex-auto my-auto w-[85%]">Men's Health</div>
                                            <button className='md:w-12 w-[15%] bg-[#194894] rounded-full flex items-center justify-center'>
                                                <img
                                                    src={arrow}
                                                    className="w-8"
                                                />
                                            </button>
                                        </div>
                                    </div> */}
                                    {/* image 6 */}
                                    {/* <div className="card flex relative flex-col px-6 pt-20 pb-12 my-auto text-2xl font-medium leading-10 text-blue-900 aspect-[0.73] max-md:px-0 max-md:mt-0 md:w-[50%]">
                                        <img
                                            src={img2}
                                            className="object-cover absolute inset-0 size-full rounded-xl"
                                        />
                                        <div className="flex relative gap-3 md:gap-5 px-7 py-3 mt-80 w-[90%] h-[20%] bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                                            <div className="flex-auto my-auto w-[85%]">Women's Health</div>
                                            <button className='md:w-12 w-[15%] bg-[#194894] rounded-full flex items-center justify-center'>
                                                <img
                                                    src={arrow}
                                                    className="w-8"
                                                />
                                            </button>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                    <div className="flex gap-5 self-stretch px-0.5 my-auto text-2xl font-medium leading-10 text-blue-900 max-md:flex-wrap max-md:mt-10">

                        <div className="flex overflow-hidden relative flex-col grow shrink-0 px-6 pt-20 pb-12 aspect-[0.73] basis-0 w-fit max-md:px-5">
                            <img
                                src={img2}
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="flex relative gap-5 px-7 py-3 mt-80 bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                                <div className="flex-auto my-auto">Women’s Health</div>
                                <img
                                    src={arrow}
                                    className="shrink-0 w-12 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="flex overflow-hidden relative flex-col items-start px-6 pt-20 pb-12 aspect-[0.1] w-[52px] max-md:hidden">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ab9157cabe4c17be4f92419767b8084403aff87de2703376a5269fb89227a48?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab9157cabe4c17be4f92419767b8084403aff87de2703376a5269fb89227a48?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab9157cabe4c17be4f92419767b8084403aff87de2703376a5269fb89227a48?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab9157cabe4c17be4f92419767b8084403aff87de2703376a5269fb89227a48?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab9157cabe4c17be4f92419767b8084403aff87de2703376a5269fb89227a48?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab9157cabe4c17be4f92419767b8084403aff87de2703376a5269fb89227a48?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab9157cabe4c17be4f92419767b8084403aff87de2703376a5269fb89227a48?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ab9157cabe4c17be4f92419767b8084403aff87de2703376a5269fb89227a48?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                                className="object-cover absolute inset-0 size-full"
                            />
                            <div className="relative justify-center items-start p-6 mt-80 bg-white rounded-3xl backdrop-blur-[15px] max-md:pl-5 max-md:mt-10">
                                Weight Loss
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SpeTest