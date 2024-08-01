import React from "react";
import chevronDown from '../../icons/chevron-down.svg'
const productsModule = require('./products');
const products = productsModule.default;

const Content = ({sidebarToggle, setSidebarToggle}) => {
    return (
        <div className="flex flex-col grow mt-5 max-md:mt-10 max-md:max-w-full">
            {/* Header */}
            <div className="flex flex-row justify-between items-center gap-5 px-5 md:w-full max-md:flex-wrap max-w-full">
                <div className="flex-auto text-3xl leading-10 text-black ">
                    Our Catalog
                </div>
                <div className="flex gap-3 self-center items-center text-sm">
                    <div className="flex items-center my-auto text-black text-opacity-60">
                        Showing 1-12 of 12 Products
                    </div>
                    <div className="flex gap-1 text-black items-center">
                        <div className="flex flex-row gap-2">
                            <span className="">Sort by: </span>
                            <span className="font-medium text-black">Most Popular</span>
                            <img
                                src={chevronDown}
                                className="shrink-0 my-auto w-6 aspect-square"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-9 px-2 max-md:max-w-full">
                <div className="flex flex-row flex-wrap flex-1 gap-5 max-md:flex-col items-center justify-center">

                    {products.map(p => (
                        
                            <div className="flex flex-col ml-5 w-[20%] max-md:ml-0 max-md:w-[80%]" key={p.id}>
                                <div className="flex flex-col max-md:items-center grow pt-6 pb-10 items-center w-full text-xs font-medium leading-5 text-black whitespace-nowrap rounded-3xl bg-blue-900 bg-opacity-10 max-md:px-5 max-md:mt-7">
                                    <div className="self-end mx-4 bg-[#194894] bg-opacity-[10%] rounded-xl p-1 text-black">
                                        <span className="text-black z-10">
                                            {p.type}
                                        </span>
                                    </div>
                                    <img
                                        src={p.src}
                                        className="mt-9 aspect-[0.54] w-[78px]"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-2 self-center text-base leading-5 text-center">
                                    {p.title}
                                </div>

                                <div id="title" className='mt-1 mb-1 text-center text-xs leading-6 underline font-medium'>
                                    {p.extra ? p.extra : <div className="mt-6"></div>}
                                </div>
                            </div>
                        
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Content