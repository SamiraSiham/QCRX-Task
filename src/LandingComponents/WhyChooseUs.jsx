import React from 'react'
import arrow from '../icons/arrow-black.svg';
import photo from '../images/whyChoose.jpg'
const WhyChooseUs = () => {
    return (
        <div className='font-[Manrope]'>
            <div className="flex flex-col self-stretch px-12 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="text-xl leading-10  text-black max-md:max-w-full">
                    Why Choose QCRx?
                </div>
                <div className="shrink-0 h-px bg-cyan-500 w-[114px]" />
                <div className="mt-7 text-5xl leading-10 text-black max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    Quality and Customer Service are the most important elements of a
                    pharmacy.
                </div>
                <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                                <div className="text-2xl font-medium leading-10 max-md:max-w-full">
                                    Highest Quality
                                </div>
                                <div className="mt-6 text-base leading-6 max-md:max-w-full">
                                    Top 1% of 503A pharmacies nationally and the only pharmacy in
                                    Nevada to meet NEW USP &lt;797&gt; and &lt;800&gt; standards
                                </div>
                                <div className="shrink-0 mt-6 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                                <div className="text-2xl font-medium leading-10 max-md:max-w-full">
                                    Best Customer Service
                                </div>
                                <div className="mt-7 text-base leading-6 max-md:max-w-full">
                                    Can't get through to your pharmacy? We hear it all the
                                    time. At QCRx we have friendly staff that answer your calls
                                    and treat you with the respect you deserve.
                                </div>
                                <div className="shrink-0 mt-5 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                                <div className="text-2xl font-medium leading-10 max-md:max-w-full">
                                    Fastest Delivery
                                </div>
                                <div className="mt-6 text-base leading-6 max-md:max-w-full">
                                    We ship most products same day, so your patients aren't waiting
                                    for their medications.
                                </div>
                                <div className="shrink-0 mt-6 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
                                <div className="text-2xl font-medium leading-10 max-md:max-w-full">
                                    Price Match Guarantee
                                </div>
                                <div className="mt-7 text-base leading-6 max-md:max-w-full">
                                    Change can be hard, but with out price match guarantee we make it
                                    easy. Get the same great price  - just better quality, service,
                                    and delivery times.
                                </div>
                                <div className="shrink-0 mt-5 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-0.5 pl-16 mt-24 bg-blue-900 rounded-3xl max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
                                <div className="text-5xl leading-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                                    Innovative technology for compounding excellence.
                                </div>
                                <div className="mt-14 text-base leading-6 max-md:mt-10 max-md:max-w-full">
                                    Tempor ornare sed nulla justo est. Dolor elit morbi
                                    ullamcorper faucibus egestas sed natoque luctus. Pulvinar sed
                                    in ultrices porttitor eleifend venenatis morbi scelerisque.
                                    Facilisi velit sit lectus mauris donec. Dui adipiscing etiam
                                    sit lectus quis iaculis aliquet.
                                    <br />
                                    <br />
                                    Commodo nunc facilisis vel arcu et eget augue nisl. Venenatis
                                    mattis vitae sit sem ut suscipit egestas ut aliquam. Libero
                                    proin mauris ultrices porttitor quam lacus mi. Condimentum
                                    cursus condimentum laoreet dignissim amet vestibulum.
                                </div>
                                <button className="flex gap-4 self-start px-8 py-4 mt-16 text-sm font-medium text-blue-900 bg-white rounded-3xl max-md:px-5 max-md:mt-10">
                                    <span className='text-[14pt]'>More About Us</span>
                                    <img src={arrow} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                            <img
                                src={photo}
                                className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs