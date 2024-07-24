import React from 'react'
import icon from '../images/about/icon.svg'
import icon2 from '../images/about/icon2.png'
import img1 from '../images/about/img1.png'
import img2 from '../images/about/img2.png'
import img3 from '../images/about/img3.png'
const About = () => {
    return (
        <>
            <div className='flex flex-col gap-3 items-center justify-center mb-10'>
                <h1 id='title' className='text-3xl'>
                    White Label Services
                </h1>
                <div className='my-5 w-1/2 text-center md:w-[80%] p-0'>
                    Nec purus adipiscing pellentesque ultrices in viverra amet. Sit egestas mi platea nisl est.
                </div>
                <div className='flex flex-col md:flex-row md:justify-around gap-3 px-2 w-full'>
                    <div className='border-[#194894] border-2 rounded-xl w-full md:w-1/3 p-9 border-opacity-[50%]'>
                        <div className='flex flex-row justify-between w-full'>
                            <img src={img1} className='size-20' alt="" />
                            <div className='flex flex-col w-2/3 ms-2'>
                                <div>Bonnie Fraser</div>
                                <div>MD, CWSP</div>
                            </div>
                            <div className=''>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className='mt-2'>
                            “I have really enjoyed working with the team at QCRx.
                            They are very professional and I appreciate their commitment to excellent customer service"
                        </div>
                    </div>
                    <div className='border-[#194894] border-2 rounded-xl w-full md:w-1/3 p-9 border-opacity-[50%]'>
                        <div className='flex flex-row justify-between w-full'>
                            <img src={img2} className='size-20' alt="" />
                            <div className='flex flex-col w-2/3 ms-2'>
                                <div>Bonnie Fraser</div>
                                <div>DO</div>
                            </div>
                            <div className=''>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className='mt-2'>
                            "I get to know my patients and build trust so I can improve their lives
                            My relationship with QCRx and the Pharmacist Jub is similar.
                            He works closely with my office to design the best formulations for each patient.
                            I can't recommend them enough!"
                        </div>
                    </div>
                    <div className='border-[#194894] border-2 rounded-xl w-full md:w-1/3 p-9 border-opacity-[50%]'>
                        <div className='flex flex-row justify-between w-full'>
                            <img src={img3} className='size-20' alt="" />
                            <div className='flex flex-col w-2/3 ms-2'>
                                <div>Bonnie Fraser</div>
                                <div>MD, CWSP</div>
                            </div>
                            <div className=''>
                                <img src={icon} alt="" />
                            </div>
                        </div>
                        <div className='mt-2'>
                            “Great products and great prices! I am so happy to have found QCRx!”
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <img src={icon2} alt="" />
                </div>  
            </div>
        </>
    )
}

export default About