import React from "react";
import chevronDown from '../icons/chevron-down.svg'
import pr1 from '../images/products/product 1.png'
import pr2 from '../images/products/product 2.png'
import pr3 from '../images/products/product 3.png'
import pr4 from '../images/products/product 4.png'
import pr5 from '../images/products/product 5.png'
import pr6 from '../images/products/product 6.png'
import pr7 from '../images/products/product 7.png'
import pr8 from '../images/products/product 8.png'
import pr9 from '../images/products/product 9.png'
import pr10 from '../images/products/product 10.png'
import pr11 from '../images/products/product 11.png'
import pr12 from '../images/products/product 12.png'
import pr13 from '../images/products/product 13.png'
import pr14 from '../images/products/product 14.png'
import pr15 from '../images/products/product 15.png'
import pr16 from '../images/products/product 16.png'
const products = [
    {
        id: 1,
        src: pr1,
        title: 'Progesteron',
        type: 'Capsule',
        extra: 'Also available in cream'
    },
    {
        id: 2,
        src: pr2,
        title: 'Progesteron',
        type: 'Cream',
        extra: 'Also available in capsule'
    },
    {
        id: 3,
        src: pr3,
        title: '7-Keto DHEA Capsules',
        type: 'Capsule',
    },
    {
        id: 4,
        src: pr4,
        title: 'ACETYLCYSTEINE',
        type: 'Injection',
    },
    {
        id: 5,
        src: pr5,
        title: 'Acyclovir/Lidocaine/Lysine HCl',
        type: 'Lip Balm',
        extra: 'Also available in lip lotion'
    },
    {
        id: 6,
        src: pr6,
        title: 'Acyclovir/Lidocaine/Lysine HCl',
        type: 'Lip Lotion',
        extra: 'Also available in lip balm'
    },
    {
        id: 7,
        src: pr7,
        title: 'Acetyl-D Glucosamine 2% Kojic Acid / Niacinamide / Sirolimus',
        type: 'Cream',
    },
    {
        id: 8,
        src: pr8,
        title: 'DHEA',
        type: 'Capsule',
        extra: 'Also available in cream'
    },
    {
        id: 9,
        src: pr9,
        title: 'DHEA',
        type: 'Cream',
        extra: 'Also available in capsule'
    },
    {
        id: 10,
        src: pr10,
        title: 'Dutasteride',
        type: 'Solution',
    },
    {
        id: 11,
        src: pr11,
        title: 'Clindamycin / Niacinamide / Tretinoin',
        type: 'Gel',
    },
    {
        id: 12,
        src: pr12,
        title: 'Bremelanotide (Peptide) / Oxytocin / Tadalafil',
        type: 'Troches',
    },
    {
        id: 13,
        src: pr13,
        title: 'Ketamine - Nasal Spray',
        type: 'Nasal Spray',
    },
    {
        id: 14,
        src: pr14,
        title: 'Lidocaine / Prilocaine / Titracaine',
        type: 'Oral Rinse',
    },
    {
        id: 15,
        src: pr15,
        title: 'Latanoprost',
        type: 'Solution',
    },
    {
        id: 16,
        src: pr16,
        title: 'Myers Cocktail (SDV)',
        type: 'Injection',
    },
]
const Content = () => {
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
                <div className="flex flex-row flex-wrap gap-5 max-md:flex-col">

                    {products.map(p => (
                        
                            <div className="flex flex-col ml-5 w-[20%] max-md:ml-0 max-md:w-full" key={p.id}>
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