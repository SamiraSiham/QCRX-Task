import React from 'react'
import '../faq.js'
import '../faq.css'
import plus from '../icons/plus.svg'
import minus from '../icons/minus.svg'
const Faq = () => {
    return (
        <div id='faq-section' className='mt-5 '>
            <h2 id='title' className="text-3xl my-4">FAQ</h2>
            <div className="faq w-full">
                <div className="question text-justify w-full">
                    <h3 className='md:text-2xl text-xl flex flex-row justify-between items-center border-b-gray-400 border-b-[1px]'>
                        <span className='w-3/4'>
                            What sets QCRx apart from other pharmacies?
                        </span>
                        {/* <img src={plus} className='md:h-10 h-8' alt="" /> */}
                        <button>
                            <img src={plus} className='icon-btn md:h-10 h-8' alt="" />
                        </button>
                    </h3>
                </div>
                <div className="answer">
                    <p className='w-[90%]'>
                        Mattis tincidunt blandit scelerisque pellentesque. Diam ut gravida molestie platea sed facilisis enim facilisi ut.
                        Gravida tristique aliquet est mi dolor pretium. Velit magna sit fames convallis.
                        Eget suscipit id proin nisl gravida adipiscing mauris ultricies.
                        Malesuada ut nullam massa ullamcorper netus pharetra quis maecenas arcu. Pharetra in hac aliquet interdum dui augue.
                        Euismod faucibus gravida vulputate semper. Vitae et feugiat vel et aenean ac in.
                    </p>
                </div>
            </div>
            <div className="faq w-full">
                <div className="question text-justify w-full">
                    <h3 className='md:text-2xl text-xl flex flex-row justify-between items-center border-b-gray-400 border-b-[1px]'>
                        <span className='w-3/4'>
                            What does 795/797/800 mean?
                        </span>
                        <img src={plus} className='icon-btn md:h-10 h-8' alt="" />
                    </h3>
                </div>
                <div className="answer">
                    <p className='w-[90%]'>
                        Mattis tincidunt blandit scelerisque pellentesque. Diam ut gravida molestie platea sed facilisis enim facilisi ut.
                        Gravida tristique aliquet est mi dolor pretium. Velit magna sit fames convallis.
                        Eget suscipit id proin nisl gravida adipiscing mauris ultricies.
                        Malesuada ut nullam massa ullamcorper netus pharetra quis maecenas arcu. Pharetra in hac aliquet interdum dui augue.
                        Euismod faucibus gravida vulputate semper. Vitae et feugiat vel et aenean ac in.
                    </p>
                </div>
            </div>
            <div className="faq w-full">
                <div className="question text-justify w-full">
                    <h3 className='md:text-2xl text-xl flex flex-row justify-between items-center border-b-gray-400 border-b-[1px]'>
                        <span className='w-3/4'>
                            What is the difference between a 503A/B and retail pharmacies?
                        </span>
                        <img src={plus} className='icon-btn md:h-10 h-8' alt="" />
                    </h3>
                </div>
                <div className="answer">
                    <p className='w-[90%]'>
                        Mattis tincidunt blandit scelerisque pellentesque. Diam ut gravida molestie platea sed facilisis enim facilisi ut.
                        Gravida tristique aliquet est mi dolor pretium. Velit magna sit fames convallis.
                        Eget suscipit id proin nisl gravida adipiscing mauris ultricies.
                        Malesuada ut nullam massa ullamcorper netus pharetra quis maecenas arcu. Pharetra in hac aliquet interdum dui augue.
                        Euismod faucibus gravida vulputate semper. Vitae et feugiat vel et aenean ac in.
                    </p>
                </div>
            </div>
            <div className="faq w-full">
                <div className="question text-justify w-full">
                    <h3 className='md:text-2xl text-xl flex flex-row justify-between items-center border-b-gray-400 border-b-[1px]'>
                        <span className='w-3/4'>
                            What types of medications do we compound?
                        </span>
                        <img src={plus} className='icon-btn md:h-10 h-8' alt="" />
                    </h3>
                </div>
                <div className="answer">
                    <p className='w-[90%]'>
                        Mattis tincidunt blandit scelerisque pellentesque. Diam ut gravida molestie platea sed facilisis enim facilisi ut.
                        Gravida tristique aliquet est mi dolor pretium. Velit magna sit fames convallis.
                        Eget suscipit id proin nisl gravida adipiscing mauris ultricies.
                        Malesuada ut nullam massa ullamcorper netus pharetra quis maecenas arcu. Pharetra in hac aliquet interdum dui augue.
                        Euismod faucibus gravida vulputate semper. Vitae et feugiat vel et aenean ac in.
                    </p>
                </div>
            </div>
            <div className="faq w-full">
                <div className="question text-justify w-full">
                    <h3 className='md:text-2xl text-xl flex flex-row justify-between items-center border-b-gray-400 border-b-[1px]'>
                        <span className='w-3/4'>
                            What type of doctors/clinics should we target?
                        </span>
                        {/* <img src={plus} className='icon-btn cursor-pointer md:h-10 h-8' alt="" /> */}
                        <button>
                            <img src={plus} className='icon-btn md:h-10 h-8' alt="" />
                        </button>
                    </h3>
                </div>
                <div className="answer">
                    <p className='w-[90%]'>
                        Mattis tincidunt blandit scelerisque pellentesque. Diam ut gravida molestie platea sed facilisis enim facilisi ut.
                        Gravida tristique aliquet est mi dolor pretium. Velit magna sit fames convallis.
                        Eget suscipit id proin nisl gravida adipiscing mauris ultricies.
                        Malesuada ut nullam massa ullamcorper netus pharetra quis maecenas arcu. Pharetra in hac aliquet interdum dui augue.
                        Euismod faucibus gravida vulputate semper. Vitae et feugiat vel et aenean ac in.
                    </p>
                </div>
            </div>
            <div className="faq w-full">
                <div className="question text-justify w-full">
                    <h3 className='md:text-2xl text-xl flex flex-row justify-between items-center border-b-gray-400 border-b-[1px]'>
                        <span className='w-3/4'>
                            Depending on the type of doctor/clinic what products should I pitch them?
                        </span>
                        <img src={plus} className='icon-btn cursor-pointer md:h-10 h-8' alt="" />
                    </h3>
                </div>
                <div className="answer">
                    <p className='w-[90%]'>
                        Mattis tincidunt blandit scelerisque pellentesque. Diam ut gravida molestie platea sed facilisis enim facilisi ut.
                        Gravida tristique aliquet est mi dolor pretium. Velit magna sit fames convallis.
                        Eget suscipit id proin nisl gravida adipiscing mauris ultricies.
                        Malesuada ut nullam massa ullamcorper netus pharetra quis maecenas arcu. Pharetra in hac aliquet interdum dui augue.
                        Euismod faucibus gravida vulputate semper. Vitae et feugiat vel et aenean ac in.
                    </p>
                </div>
            </div>
            <div className="faq w-full">
                <div className="question text-justify w-full">
                    <h3 className='md:text-2xl text-xl flex flex-row justify-between items-center border-b-gray-400 border-b-[1px]'>
                        <span className='w-3/4'>
                            How many states do we operate in?
                        </span>
                        <img src={plus} className='icon-btn cursor-pointer md:h-10 h-8' alt="" />
                    </h3>
                </div>
                <div className="answer">
                    <p className='w-[90%]'>
                        Mattis tincidunt blandit scelerisque pellentesque. Diam ut gravida molestie platea sed facilisis enim facilisi ut.
                        Gravida tristique aliquet est mi dolor pretium. Velit magna sit fames convallis.
                        Eget suscipit id proin nisl gravida adipiscing mauris ultricies.
                        Malesuada ut nullam massa ullamcorper netus pharetra quis maecenas arcu. Pharetra in hac aliquet interdum dui augue.
                        Euismod faucibus gravida vulputate semper. Vitae et feugiat vel et aenean ac in.
                    </p>
                </div>
            </div>
            <div className='flex flex-row md:justify-around my-10'>
                <div className="shrink-0 h-px bg-[#194894] bg-opacity-[50%] w-[90vw]" />
            </div>
        </div>
    )
}

export default Faq