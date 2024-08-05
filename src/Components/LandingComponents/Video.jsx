import React from 'react'
import videoSrc from '../../videos/video.mp4'
const Video = () => {
    return (
        <div className=" mt-5 flex justify-center items-center">
            <div className="w-full justify-center items-center flex">
                <div className="flex justify-center items-center">
                    <video id="video" className='md:size-2/3 max-md:size-full rounded-xl' controls>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Video