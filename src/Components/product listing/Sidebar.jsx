import React from 'react'
import searchIcon from '../../icons/search.svg'
import filterIcon from '../../icons/filter.svg'
import chevronDown from '../../icons/chevron-down.svg'
import chevronUp from '../../icons/chevron-up.svg'
const Sidebar = () => {
  return (
    <div className="font-[Manrope] flex flex-col md:items-start max-md:items-center me-5 py-8 pr-5 pl-14 mx-auto max-md:w-full w-1/4 text-base font-medium leading-6 text-black bg-white rounded-3xl border border-solid border-zinc-100 max-md:pl-5 max-md:mt-10">

      <div className="text-2xl leading-10 max-md:ml-2.5 font-Georgia">
        Search
      </div>
      <div className="flex gap-5 px-5 py-3.5 mt-6  text-sm bg-white rounded-3xl border border-blue-900 border-solid max-md:pr-5 max-md:ml-2.5 max-md:w-[90%]">
        <input type="search" className='flex-auto my-auto placeholder:text-black' placeholder='Search Product' />
        <img
          src={searchIcon}
          className="shrink-0 w-4 aspect-square"
          alt=""
        />
      </div>
      <div className="shrink-0 mt-7  h-px bg-blue-900 border border-blue-900 border-solid md:w-[236px] max-md:w-[90%] max-md:ml-2.5" />
      <div className="font-Georgia flex gap-5 justify-between pe-2 md:w-full items-center mt-7 ml-5 text-2xl leading-10 whitespace-nowrap max-md:ml-2.5">
        <div>Filters</div>
        {/* <button onClick={openDropdown((prev) => !prev)}> */}
        <img
          src={filterIcon}
          className="shrink-0 self-start w-8 md:mt-1 aspect-[1.05] fill-opacity-40"
          alt=""
        />
        {/* </button> */}
      </div>
      <div className="flex gap-5 justify-between mt-8  w-full max-md:ml-2.5 ">
        <div className="flex gap-2.5 items-center md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">Men's Health</div>
        </div>
        <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
      </div>
      <div className="flex gap-5 justify-between mt-6  w-full max-md:ml-2.5 ">
        <div className="flex gap-2.5 items-center md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">Women's Health</div>
        </div>
        <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
      </div>
      <div className="flex gap-5 justify-between mt-5  w-full max-md:ml-2.5 k">
        <div className="flex gap-2.5 items-center md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">Weight Loss</div>
        </div>
        <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
      </div>
      <div className="flex gap-5 justify-between mt-5  w-full max-md:ml-2.5 ">
        <div className="flex gap-2.5 items-center md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">Sexual Health</div>
        </div>
        <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
      </div>
      <div className="flex gap-5 justify-between mt-5  w-full max-md:ml-2.5 ">
        <div className="flex gap-2.5 items-center md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">IV & Vitamins</div>
        </div>
        <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />

      </div>
      <div className="flex justify-between mt-5 w-full max-md:ml-2.5 ">
        <div className="flex gap-2.5 items-center md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto size-1/2 flex items-center">Dermatology/Beauty</div>
        </div>
        <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
      </div>
      <div className="shrink-0 mt-6 h-px bg-blue-900 border border-blue-900 border-solid w-[80%] max-md:ml-2.5" />
      <div className='max-md:w-full items-start '>
        <div className="flex gap-5 justify-between mt-6 w-full max-md:justify-center items-center">
          <div className='max-md:text-xl'>Dosage Form</div>
          <img
            src={chevronUp}
            className="shrink-0 my-auto w-12 max-md:w-16 aspect-[1.72] fill-black"
            alt=""
          />
        </div>
        <div className='flex flex-col items-center justify-center gap-4 mt-5~'>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid " /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Capsule</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Injection</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Cream</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Lip Balm</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Lip Lotion</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Troches</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Gel</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Solution</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Nasal Spray</div>
          </div>
          <div className="flex items-center gap-3  w-[100%] max-md:w-[40%] max-md:justify-start max-md:gap-3">
            {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
            <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
            <div className='max-md:text-lg'>Oral Rinse</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;