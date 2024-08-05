import React from 'react'
import ellipse from '../../icons/ellipse.svg'
import '../../css/tour.css'
import '../../js/tour.js'
import img1 from '../../images/card stack animation/1.png'
import img2 from '../../images/card stack animation/2.png'
import img3 from '../../images/card stack animation/3.png'
import img4 from '../../images/card stack animation/4.png'
import img5 from '../../images/card stack animation/5.png'
import img6 from '../../images/card stack animation/6.png'
import img7 from '../../images/card stack animation/7.png'
import img8 from '../../images/card stack animation/8.png'
import arrow from '../../icons/hero-arrow-icon.svg'
const Tour = () => {
  return (
    <div id='tour-section' className='flex flex-col items-center md:mb-[30vh] max-md:h-[100vh]'>

      <h1 className='text-3xl my-10 w-1/2 text-center md:w-1/5 p-0 font-Georgia font-[48px] '>A pictures Worth a Thousand Words</h1>

      <div className='flex flex-row gap-3'>
        <img src={ellipse} alt="" />
        <h3 className='font-medium'>Keep scrolling</h3>
      </div>

      <div id='tour-container' className='lg:pt-10'>
        <div className="card-container-stack">
          <div className="card-stack">
            <img src={img1} alt="" />
          </div>
          <div className="card-stack">
            <img src={img2} alt="" />
          </div>
          <div className="card-stack">
            <img src={img3} alt="" />
          </div>
          <div className="card-stack">
            <img src={img4} alt="" />
          </div>
          <div className="card-stack">
            <img src={img5} alt="" />
          </div>
          <div className="card-stack">
            <img src={img6} alt="" />
          </div>
          <div className="card-stack">
            <img src={img7} alt="" />
          </div>
          <div className="card-stack">
            <img src={img8} alt="" />
          </div>
          <div className="text flex flex-col gap-2 items-center justify-center">
            <h1>Tour QCRx</h1>
            <button
              id="button"
              className="bg-[#194894] text-white rounded-full flex items-center justify-center p-2 text-sm"
            >
              View Tour now
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tour