import React from 'react'
import searchIcon from '../icons/search.svg'
import filterIcon from '../icons/filter.svg'
import chevronDown from '../icons/chevron-down.svg'
import chevronUp from '../icons/chevron-up.svg'
const Sidebar = () => {
  return (
    <div className="flex flex-col items-start me-5 py-8 pr-5 pl-14 mx-auto w-full text-base font-medium leading-6 text-black bg-white rounded-3xl border border-solid border-zinc-100 max-md:pl-5 max-md:mt-10">

      <div className="ml-5 text-2xl leading-10 max-md:ml-2.5">
        Search
      </div>
      <div className="flex gap-5 px-5 py-3.5 mt-6 ml-5 text-sm bg-white rounded-3xl border border-blue-900 border-solid max-md:pr-5 max-md:ml-2.5">
        <input type="search" className='flex-auto my-auto placeholder:text-black' placeholder='Search Product' />
        <img
          src={searchIcon}
          className="shrink-0 w-4 aspect-square"
          alt=""
        />
      </div>
      <div className="shrink-0 mt-7 ml-5 h-px bg-blue-900 border border-blue-900 border-solid w-[236px] max-md:ml-2.5" />
      <div className="flex gap-5 justify-between pe-2 md:w-full items-center mt-7 ml-5 text-2xl leading-10 whitespace-nowrap max-md:ml-2.5">
        <div>Filters</div>
        <img
          src={filterIcon}
          className="shrink-0 self-start w-8 md:mt-1 aspect-[1.05] fill-opacity-40"
          alt=""
        />
      </div>
      <div className="flex gap-5 justify-between mt-8 ml-5 w-full max-md:ml-2.5">
        <div className="flex gap-2.5 items-center justify-between md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">Men's Health</div>
          <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-6 ml-5 w-full max-md:ml-2.5">
        <div className="flex gap-2.5 items-center justify-between md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">Women's Health</div>
          <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-5 ml-5 w-full max-md:ml-2.5">
        <div className="flex gap-2.5 items-center justify-between md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">Weight Loss</div>
          <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-5 ml-5 w-full max-md:ml-2.5">
        <div className="flex gap-2.5 items-center justify-between md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">Sexual Health</div>
          <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-5 ml-5 w-full max-md:ml-2.5">
        <div className="flex gap-2.5 items-center justify-between md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto">IV & Vitamins</div>
          <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-5 ml-5 whitespace-nowrap max-md:ml-2.5">
        <div className="flex gap-3 items-center justify-between md:w-full">
          <input type="checkbox" className="form-checkbox border-blue-900 border-solid size-5 rounded-xl" />
          <div className="my-auto size-1/2 flex items-center">Dermatology/Beauty</div>
          <img src={chevronDown} className='shrink-0 my-auto w-12 aspect-[1.72] fill-black' alt="" />
        </div>
      </div>
      <div className="shrink-0 mt-6 ml-5 h-px bg-blue-900 border border-blue-900 border-solid w-[236px] max-md:ml-2.5" />
      <div className="flex gap-5 justify-between mt-6 ml-5 max-md:ml-2.5">
        <div>Dosage Form</div>
        <img
          src={chevronUp}
          className="shrink-0 my-auto w-3 aspect-[1.72] fill-black"
          alt=""
        />
      </div>
      <div className="flex items-center gap-2.5 mt-5 ml-5 whitespace-nowrap max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid " /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div>Capsule</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 whitespace-nowrap max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div>Injection</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 whitespace-nowrap max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div className="my-auto">Cream</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div>Lip Balm</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div>Lip Lotion</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 whitespace-nowrap max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div className="my-auto">Troches</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 whitespace-nowrap max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div className="my-auto">Gel</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 whitespace-nowrap max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div className="my-auto">Solution</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div>Nasal Spray</div>
      </div>
      <div className="flex items-center gap-2.5 mt-4 ml-5 max-md:ml-2.5">
        {/* <div className="shrink-0 bg-white rounded border border-blue-900 border-solid h-[18px] w-[18px]" /> */}
        <input type="checkbox" className="form-checkbox border-blue-900 border-solid h-[18px] w-[18px] rounded-xl" />
        <div className="my-auto">Oral Rinse</div>
      </div>
    </div>
  );
}

export default Sidebar;