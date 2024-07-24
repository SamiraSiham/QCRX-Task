// import * as React from "react";
import React from 'react';

export default function Test() {
return (
  <div className="flex flex-col items-center py-9 bg-white">
    <div className="flex flex-col justify-center self-stretch w-full bg-white max-md:max-w-full">
      <div className="flex flex-col justify-end px-12 pb-5 bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex z-10 gap-5 items-center px-px mt-0 w-full text-sm font-medium max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b97b60f3459c47cf87733a48d0377db7e54cb38b05e6611d462f85cee2b85cdb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
            className="shrink-0 self-stretch my-auto max-w-full aspect-[3.23] w-[117px]"
          />
          <div className="flex-auto self-stretch my-auto text-blue-900 underline max-md:max-w-full">
            Home Catalog About Facility Tour Patients{" "}
            <span className="font-semibold text-blue-900 underline">
              Providers
            </span>{" "}
            Contact Us
          </div>
          <div className="flex gap-5 justify-between self-stretch">
            <div className="my-auto text-blue-900">Log In</div>
            <div className="justify-center px-8 py-4 text-white whitespace-nowrap bg-blue-900 rounded-3xl max-md:px-5">
              Register
            </div>
          </div>
        </div>
        <div className="self-center mt-20 text-5xl leading-10 text-center text-black w-[509px] max-md:mt-10 max-md:text-4xl max-md:leading-10">
          Customized health solutions, always.
        </div>
        <div className="flex gap-3 self-center px-7 py-4 mt-24 text-sm font-medium text-white bg-blue-900 rounded-3xl max-md:px-5 max-md:mt-10">
          <div className="grow">View Our Catalog</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ffdc5883cf1fb8966c5aadb5f4013df0deff1e609cc56d2f7339f14a3b3bd87?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
            className="shrink-0 self-start w-3.5 aspect-square fill-white"
          />
        </div>
        {/* slideshow start */}
        <div className="px-0.5 mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/520a9cc93ab9faa3ba51c2c1472e2ef3283beb64eb072968feb977bd56c95f96?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/520a9cc93ab9faa3ba51c2c1472e2ef3283beb64eb072968feb977bd56c95f96?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/520a9cc93ab9faa3ba51c2c1472e2ef3283beb64eb072968feb977bd56c95f96?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/520a9cc93ab9faa3ba51c2c1472e2ef3283beb64eb072968feb977bd56c95f96?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/520a9cc93ab9faa3ba51c2c1472e2ef3283beb64eb072968feb977bd56c95f96?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/520a9cc93ab9faa3ba51c2c1472e2ef3283beb64eb072968feb977bd56c95f96?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/520a9cc93ab9faa3ba51c2c1472e2ef3283beb64eb072968feb977bd56c95f96?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/520a9cc93ab9faa3ba51c2c1472e2ef3283beb64eb072968feb977bd56c95f96?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="grow w-full aspect-[0.98] max-md:mt-6 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1f3e25d2f8c67d118491659152bd6176c85396bcea1da21568e2975a2c244?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1f3e25d2f8c67d118491659152bd6176c85396bcea1da21568e2975a2c244?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1f3e25d2f8c67d118491659152bd6176c85396bcea1da21568e2975a2c244?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1f3e25d2f8c67d118491659152bd6176c85396bcea1da21568e2975a2c244?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1f3e25d2f8c67d118491659152bd6176c85396bcea1da21568e2975a2c244?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1f3e25d2f8c67d118491659152bd6176c85396bcea1da21568e2975a2c244?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1f3e25d2f8c67d118491659152bd6176c85396bcea1da21568e2975a2c244?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bf1f3e25d2f8c67d118491659152bd6176c85396bcea1da21568e2975a2c244?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="grow w-full aspect-[0.98] max-md:mt-6 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/896cbbca52abce3ac6b55aa777f727397e81baff485a9ba1fc89dfc335470373?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/896cbbca52abce3ac6b55aa777f727397e81baff485a9ba1fc89dfc335470373?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/896cbbca52abce3ac6b55aa777f727397e81baff485a9ba1fc89dfc335470373?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/896cbbca52abce3ac6b55aa777f727397e81baff485a9ba1fc89dfc335470373?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/896cbbca52abce3ac6b55aa777f727397e81baff485a9ba1fc89dfc335470373?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/896cbbca52abce3ac6b55aa777f727397e81baff485a9ba1fc89dfc335470373?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/896cbbca52abce3ac6b55aa777f727397e81baff485a9ba1fc89dfc335470373?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/896cbbca52abce3ac6b55aa777f727397e81baff485a9ba1fc89dfc335470373?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="grow w-full aspect-[0.98] max-md:mt-6 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        {/* slideshow end */}
      </div>
    </div>
    {/* why choose us start */}
    <div className="flex flex-col self-stretch px-12 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="text-xl leading-10 text-center text-black max-md:max-w-full">
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
                Can’t get through to your pharmacy? We hear it all the
                time. At QCRx we have friendly staff that answer your calls
                and treat you with the respect you deserve.
              </div>
              <div className="shrink-0 mt-5 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-10 max-w-full text-2xl font-medium leading-10 text-black w-[903px] max-md:flex-wrap">
        <div className="flex-auto">Fastest Delivery</div>
        <div className="flex-auto">Price Match Guarantee</div>
      </div>
      <div className="flex gap-5 mt-6 text-base leading-6 text-black max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="max-md:max-w-full">
            We ship most products same day, so your patients aren’t waiting
            for their medications.
          </div>
          <div className="shrink-0 mt-6 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
        </div>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="max-md:max-w-full">
            Change can be hard, but with out price match guarantee we make it
            easy. Get the same great price  - just better quality, service,
            and delivery times.
          </div>
          <div className="shrink-0 mt-5 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
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
              <div className="flex gap-4 self-start px-8 py-4 mt-16 text-sm font-medium text-blue-900 bg-white rounded-3xl max-md:px-5 max-md:mt-10">
                <div>More About Us</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1548c5d2b45a6c799288e44ac7379bb378aa055e29e30d90fc37ba4a1e58f9ee?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                  className="shrink-0 self-start w-3.5 border border-black border-solid aspect-square fill-blue-900 stroke-[1px] stroke-black"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ac365d5582fd3b3a27e18f9d72a7a08edf9012f848f5e18db3a3f813fa59e34?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac365d5582fd3b3a27e18f9d72a7a08edf9012f848f5e18db3a3f813fa59e34?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac365d5582fd3b3a27e18f9d72a7a08edf9012f848f5e18db3a3f813fa59e34?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac365d5582fd3b3a27e18f9d72a7a08edf9012f848f5e18db3a3f813fa59e34?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac365d5582fd3b3a27e18f9d72a7a08edf9012f848f5e18db3a3f813fa59e34?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac365d5582fd3b3a27e18f9d72a7a08edf9012f848f5e18db3a3f813fa59e34?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac365d5582fd3b3a27e18f9d72a7a08edf9012f848f5e18db3a3f813fa59e34?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ac365d5582fd3b3a27e18f9d72a7a08edf9012f848f5e18db3a3f813fa59e34?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
              className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    {/* why choose us end */}

    {/* second slideshow start */}
    <div className="self-stretch mt-20 w-full bg-white max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
          <div className="grow px-0.5 max-md:mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start px-12 py-20 w-full text-black bg-white border border-black border-solid max-md:px-5 max-md:max-w-full">
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
                    <div className="justify-center px-5 py-4 bg-cyan-500 rounded-3xl border border-black border-solid shadow-sm">
                      Register as Patient
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                <div className="flex overflow-hidden relative flex-col self-stretch px-6 pt-20 pb-12 my-auto text-2xl font-medium leading-10 text-blue-900 aspect-[0.73] max-md:px-5 max-md:mt-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33c7e91517a135cf4a19115ad3bc02f7b90a92b0087dd3674606df8d7469a50c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33c7e91517a135cf4a19115ad3bc02f7b90a92b0087dd3674606df8d7469a50c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33c7e91517a135cf4a19115ad3bc02f7b90a92b0087dd3674606df8d7469a50c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33c7e91517a135cf4a19115ad3bc02f7b90a92b0087dd3674606df8d7469a50c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33c7e91517a135cf4a19115ad3bc02f7b90a92b0087dd3674606df8d7469a50c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33c7e91517a135cf4a19115ad3bc02f7b90a92b0087dd3674606df8d7469a50c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33c7e91517a135cf4a19115ad3bc02f7b90a92b0087dd3674606df8d7469a50c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33c7e91517a135cf4a19115ad3bc02f7b90a92b0087dd3674606df8d7469a50c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  <div className="flex relative gap-5 px-7 py-3 mt-80 bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                    <div className="flex-auto my-auto">Men’s Health</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1a2c5e1b27bcc72f2e594ce6da912a86148be7b77f6a7abbfad07b90655d252?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                      className="shrink-0 w-12 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 self-stretch px-0.5 my-auto text-2xl font-medium leading-10 text-blue-900 max-md:flex-wrap max-md:mt-10">
            <div className="flex overflow-hidden relative flex-col grow shrink-0 px-6 pt-20 pb-12 aspect-[0.73] basis-0 w-fit max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55af9803dda933c1c692c00e02d5a9eb0b273b2059f8795ee8c85713c0251ac1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55af9803dda933c1c692c00e02d5a9eb0b273b2059f8795ee8c85713c0251ac1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55af9803dda933c1c692c00e02d5a9eb0b273b2059f8795ee8c85713c0251ac1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55af9803dda933c1c692c00e02d5a9eb0b273b2059f8795ee8c85713c0251ac1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55af9803dda933c1c692c00e02d5a9eb0b273b2059f8795ee8c85713c0251ac1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55af9803dda933c1c692c00e02d5a9eb0b273b2059f8795ee8c85713c0251ac1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55af9803dda933c1c692c00e02d5a9eb0b273b2059f8795ee8c85713c0251ac1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55af9803dda933c1c692c00e02d5a9eb0b273b2059f8795ee8c85713c0251ac1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="object-cover absolute inset-0 size-full"
              />
              <div className="flex relative gap-5 px-7 py-3 mt-80 bg-white rounded-3xl backdrop-blur-[15px] max-md:px-5 max-md:mt-10">
                <div className="flex-auto my-auto">Women’s Health</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1a2c5e1b27bcc72f2e594ce6da912a86148be7b77f6a7abbfad07b90655d252?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
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
        </div>
      </div>
    </div>
    {/* second slideshow end */}
    <div className="flex justify-center items-center self-stretch px-16 py-20 mt-8 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col mt-8 mb-6 w-full max-w-[1019px] max-md:max-w-full">
        <div className="self-center text-5xl leading-10 text-center text-black w-[579px] max-md:text-4xl max-md:leading-10">
          A Pictures Worth <br />a Thousand Words
          <br />
        </div>
        <div className="flex gap-2.5 self-center mt-12 text-sm font-medium text-black max-md:mt-10">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b21d3802266a999d4c28f13c2a0ca31688a6260a236469c36bb39984258ea355?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
            className="shrink-0 border border-black border-solid aspect-square stroke-[1px] stroke-black w-[25px]"
          />
          <div className="my-auto">Keep scrolling</div>
        </div>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef8586f5a7e339e88183d44264a8c51f0539fc9aea3bb4cf8273b7050483bdc6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8586f5a7e339e88183d44264a8c51f0539fc9aea3bb4cf8273b7050483bdc6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8586f5a7e339e88183d44264a8c51f0539fc9aea3bb4cf8273b7050483bdc6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8586f5a7e339e88183d44264a8c51f0539fc9aea3bb4cf8273b7050483bdc6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8586f5a7e339e88183d44264a8c51f0539fc9aea3bb4cf8273b7050483bdc6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8586f5a7e339e88183d44264a8c51f0539fc9aea3bb4cf8273b7050483bdc6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8586f5a7e339e88183d44264a8c51f0539fc9aea3bb4cf8273b7050483bdc6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef8586f5a7e339e88183d44264a8c51f0539fc9aea3bb4cf8273b7050483bdc6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="w-full aspect-square max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/04700c1adbbaa1e4c0edbc91b5bbfc7379a6cb80a87e5c6dd7acd57225a55ef1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/04700c1adbbaa1e4c0edbc91b5bbfc7379a6cb80a87e5c6dd7acd57225a55ef1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04700c1adbbaa1e4c0edbc91b5bbfc7379a6cb80a87e5c6dd7acd57225a55ef1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/04700c1adbbaa1e4c0edbc91b5bbfc7379a6cb80a87e5c6dd7acd57225a55ef1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/04700c1adbbaa1e4c0edbc91b5bbfc7379a6cb80a87e5c6dd7acd57225a55ef1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/04700c1adbbaa1e4c0edbc91b5bbfc7379a6cb80a87e5c6dd7acd57225a55ef1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/04700c1adbbaa1e4c0edbc91b5bbfc7379a6cb80a87e5c6dd7acd57225a55ef1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/04700c1adbbaa1e4c0edbc91b5bbfc7379a6cb80a87e5c6dd7acd57225a55ef1?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="w-full aspect-square max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea9f1b579029f3dfdc176554ce4a16059170d69e2278cc1efbfbd4f73d5f11cb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9f1b579029f3dfdc176554ce4a16059170d69e2278cc1efbfbd4f73d5f11cb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9f1b579029f3dfdc176554ce4a16059170d69e2278cc1efbfbd4f73d5f11cb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9f1b579029f3dfdc176554ce4a16059170d69e2278cc1efbfbd4f73d5f11cb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9f1b579029f3dfdc176554ce4a16059170d69e2278cc1efbfbd4f73d5f11cb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9f1b579029f3dfdc176554ce4a16059170d69e2278cc1efbfbd4f73d5f11cb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9f1b579029f3dfdc176554ce4a16059170d69e2278cc1efbfbd4f73d5f11cb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea9f1b579029f3dfdc176554ce4a16059170d69e2278cc1efbfbd4f73d5f11cb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="w-full aspect-square max-md:mt-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aa3127dee0e23d7b09139e6e9064aacef269674bce0b157358a1a4ba91571884?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3127dee0e23d7b09139e6e9064aacef269674bce0b157358a1a4ba91571884?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3127dee0e23d7b09139e6e9064aacef269674bce0b157358a1a4ba91571884?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3127dee0e23d7b09139e6e9064aacef269674bce0b157358a1a4ba91571884?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3127dee0e23d7b09139e6e9064aacef269674bce0b157358a1a4ba91571884?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3127dee0e23d7b09139e6e9064aacef269674bce0b157358a1a4ba91571884?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3127dee0e23d7b09139e6e9064aacef269674bce0b157358a1a4ba91571884?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa3127dee0e23d7b09139e6e9064aacef269674bce0b157358a1a4ba91571884?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="w-full aspect-square max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                <div className="text-5xl leading-10 text-center text-black max-md:text-4xl">
                  Tour QCRx
                </div>
                <div className="flex gap-4 self-center px-8 py-4 mt-10 text-sm font-medium text-white bg-blue-900 rounded-3xl max-md:px-5">
                  <div>View Tour Now</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7fcae6bb2fd0ffc0c3f026dacda540224a8f170dcb3a9a7cb012c588a851bd3?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                    className="shrink-0 self-start w-3.5 aspect-square fill-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b322a4a6d91236a09613b958d61ba51207c803cef2964196da244089c0169?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b322a4a6d91236a09613b958d61ba51207c803cef2964196da244089c0169?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b322a4a6d91236a09613b958d61ba51207c803cef2964196da244089c0169?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b322a4a6d91236a09613b958d61ba51207c803cef2964196da244089c0169?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b322a4a6d91236a09613b958d61ba51207c803cef2964196da244089c0169?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b322a4a6d91236a09613b958d61ba51207c803cef2964196da244089c0169?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b322a4a6d91236a09613b958d61ba51207c803cef2964196da244089c0169?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd4b322a4a6d91236a09613b958d61ba51207c803cef2964196da244089c0169?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="w-full aspect-square max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c36ec7d9d599d8625076197d7d7ed73a7968e636ab94f1d0080766410e2a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c36ec7d9d599d8625076197d7d7ed73a7968e636ab94f1d0080766410e2a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c36ec7d9d599d8625076197d7d7ed73a7968e636ab94f1d0080766410e2a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c36ec7d9d599d8625076197d7d7ed73a7968e636ab94f1d0080766410e2a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c36ec7d9d599d8625076197d7d7ed73a7968e636ab94f1d0080766410e2a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c36ec7d9d599d8625076197d7d7ed73a7968e636ab94f1d0080766410e2a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c36ec7d9d599d8625076197d7d7ed73a7968e636ab94f1d0080766410e2a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e76c36ec7d9d599d8625076197d7d7ed73a7968e636ab94f1d0080766410e2a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="w-full aspect-square max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d92f427a056bf28ed3260f3570f3bdde9f7633eaa6bd4c6db8c5319e5720f943?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f427a056bf28ed3260f3570f3bdde9f7633eaa6bd4c6db8c5319e5720f943?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f427a056bf28ed3260f3570f3bdde9f7633eaa6bd4c6db8c5319e5720f943?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f427a056bf28ed3260f3570f3bdde9f7633eaa6bd4c6db8c5319e5720f943?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f427a056bf28ed3260f3570f3bdde9f7633eaa6bd4c6db8c5319e5720f943?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f427a056bf28ed3260f3570f3bdde9f7633eaa6bd4c6db8c5319e5720f943?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f427a056bf28ed3260f3570f3bdde9f7633eaa6bd4c6db8c5319e5720f943?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d92f427a056bf28ed3260f3570f3bdde9f7633eaa6bd4c6db8c5319e5720f943?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="w-full aspect-square max-md:mt-6"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/142723ce70f8ce1ec4a2f28ccdcf6041a8ea56f7337dd1b63860b26fbfd65551?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/142723ce70f8ce1ec4a2f28ccdcf6041a8ea56f7337dd1b63860b26fbfd65551?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/142723ce70f8ce1ec4a2f28ccdcf6041a8ea56f7337dd1b63860b26fbfd65551?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/142723ce70f8ce1ec4a2f28ccdcf6041a8ea56f7337dd1b63860b26fbfd65551?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/142723ce70f8ce1ec4a2f28ccdcf6041a8ea56f7337dd1b63860b26fbfd65551?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/142723ce70f8ce1ec4a2f28ccdcf6041a8ea56f7337dd1b63860b26fbfd65551?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/142723ce70f8ce1ec4a2f28ccdcf6041a8ea56f7337dd1b63860b26fbfd65551?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/142723ce70f8ce1ec4a2f28ccdcf6041a8ea56f7337dd1b63860b26fbfd65551?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="w-full aspect-square max-md:mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-14 text-5xl leading-10 text-center text-black max-md:mt-10 max-md:text-4xl">
      White label services
    </div>
    <div className="mt-10 text-base leading-6 text-center text-black w-[837px] max-md:mt-10 max-md:max-w-full">
      Our expert team can help you develop your own line of Beverly Hills
      Cosmetics or any other product that you can imagine. Contact us today to
      schedule a consult with of our branding experts to help make your vision
      a reality. 
    </div>
    <div className="flex gap-4 px-7 py-4 mt-8 text-sm font-medium text-white bg-blue-900 rounded-3xl max-md:px-5">
      <div>Contact Us</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7fcae6bb2fd0ffc0c3f026dacda540224a8f170dcb3a9a7cb012c588a851bd3?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-start w-3.5 aspect-square fill-white"
      />
    </div>
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/602d116822148495c4807cab04e3ae9e9d3623ee6748a1a44e198a4129239d91?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/602d116822148495c4807cab04e3ae9e9d3623ee6748a1a44e198a4129239d91?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/602d116822148495c4807cab04e3ae9e9d3623ee6748a1a44e198a4129239d91?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/602d116822148495c4807cab04e3ae9e9d3623ee6748a1a44e198a4129239d91?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/602d116822148495c4807cab04e3ae9e9d3623ee6748a1a44e198a4129239d91?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/602d116822148495c4807cab04e3ae9e9d3623ee6748a1a44e198a4129239d91?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/602d116822148495c4807cab04e3ae9e9d3623ee6748a1a44e198a4129239d91?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/602d116822148495c4807cab04e3ae9e9d3623ee6748a1a44e198a4129239d91?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
      className="self-stretch mt-14 w-full aspect-[2.27] max-md:mt-10 max-md:max-w-full"
    />
    <div className="mt-11 text-base leading-6 text-center text-black max-md:mt-10">
      Some of our customers
    </div>
    <div className="flex gap-5 justify-between items-center px-5 mt-5 w-full max-w-[1338px] max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc3fbf92492fa23b765670c72c27697f1b8457620a41d517a0c4e1a2082af8c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-stretch aspect-[0.73] w-[52px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d62cbfb2bbb9e178a38695f07dbc5a413d4170d75f28dd69717872f619685d29?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-stretch my-auto aspect-[1.33] w-[77px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c702f94bc39d11f9baf5ccceffc585a9c08e79a0eea535221066864bc0e90370?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[5] w-[153px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbbd5bab305d8a074a47395c34a97ada7dbdbf7b1550dc18dc40990a613d49e0?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[7.69] w-[169px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/61514866f37709c6b1ab26fb79973d9affaa324252dc4c5eacccaca33f84945f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-stretch my-auto aspect-[4.35] w-[82px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d346ae23382f79132add919f8a5a2b25d79c4ef29234be3ba3ba12605e06d130?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[3.85] w-[107px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3eecb88b3ed4b1f198007804acac2b106db0081eadc5554ebcb1c82d615bc31d?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-stretch my-auto aspect-[2.63] w-[74px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cb1ce21af7cf606fb46b628ff6f9a79f7c03998b35c84ead741e9cf4c72346c?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-stretch my-auto max-w-full aspect-[6.25] w-[175px]"
      />
    </div>
    <div className="shrink-0 mt-7 max-w-full h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 w-[1336px]" />
    <div className="mt-28 text-5xl leading-10 text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      What people are saying about us
    </div>
    <div className="mt-8 text-base leading-6 text-center text-black max-md:max-w-full">
      Nec purus adipiscing pellentesque ultrices in viverra amet. Sit egestas
      mi platea nisl est.
    </div>
    <div className="px-5 mt-16 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-6 pt-9 pb-16 mx-auto w-full text-black bg-white rounded-3xl border border-solid border-blue-900 border-opacity-50 max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 justify-between w-full text-2xl font-medium leading-6">
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a53835a4f2155b16f235ce8551cfdf3838aa07713868456d3efb078a1da17f0f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53835a4f2155b16f235ce8551cfdf3838aa07713868456d3efb078a1da17f0f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53835a4f2155b16f235ce8551cfdf3838aa07713868456d3efb078a1da17f0f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53835a4f2155b16f235ce8551cfdf3838aa07713868456d3efb078a1da17f0f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53835a4f2155b16f235ce8551cfdf3838aa07713868456d3efb078a1da17f0f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53835a4f2155b16f235ce8551cfdf3838aa07713868456d3efb078a1da17f0f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53835a4f2155b16f235ce8551cfdf3838aa07713868456d3efb078a1da17f0f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a53835a4f2155b16f235ce8551cfdf3838aa07713868456d3efb078a1da17f0f?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                  className="shrink-0 aspect-square w-[60px]"
                />
                <div className="my-auto">
                  Bonnie Fraser
                  <br />
                  <span className="text-base ">MD, CWSP</span>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc83716eb7ee8f83120b8ba5edcf5287141bf70ae762031d4d6be8039a12110?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="shrink-0 my-auto w-10 aspect-[1.03]"
              />
            </div>
            <div className="mt-7 text-base leading-6">
              “I have really enjoyed working with the team at QCRx. They are
              very professional and I appreciate their commitment to excellent
              customer service&quot;
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-6 py-10 mx-auto w-full text-black bg-white rounded-3xl border border-solid border-blue-900 border-opacity-50 max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 justify-between w-full text-2xl font-medium leading-6">
              <div className="flex gap-5 justify-between">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1599c87dc09cd5c676a4896e7dd1b883395642d8ec4ff2bad2734629c198e8c6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1599c87dc09cd5c676a4896e7dd1b883395642d8ec4ff2bad2734629c198e8c6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1599c87dc09cd5c676a4896e7dd1b883395642d8ec4ff2bad2734629c198e8c6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1599c87dc09cd5c676a4896e7dd1b883395642d8ec4ff2bad2734629c198e8c6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1599c87dc09cd5c676a4896e7dd1b883395642d8ec4ff2bad2734629c198e8c6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1599c87dc09cd5c676a4896e7dd1b883395642d8ec4ff2bad2734629c198e8c6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1599c87dc09cd5c676a4896e7dd1b883395642d8ec4ff2bad2734629c198e8c6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1599c87dc09cd5c676a4896e7dd1b883395642d8ec4ff2bad2734629c198e8c6?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                  className="shrink-0 aspect-square w-[60px]"
                />
                <div className="my-auto">
                  Sam Zand
                  <br />
                  <span className="text-base ">DO</span>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97cacc8da2ec4d7644a2e898176b4dcccd88fab3ba73bceb78dc44fe0f4c786a?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="shrink-0 my-auto w-10 aspect-[1.03]"
              />
            </div>
            <div className="mt-7 text-base leading-6">
              &quot;I get to know my patients and build trust so I can improve
              their lives.  My relationship with QCRx and the Pharmacist Jub
              is similar. He works closely with my office to design the best
              formulations for each patient. I can’t recommend them
              enough!&quot;
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-6 pt-9 pb-20 mx-auto w-full text-black bg-white rounded-3xl border border-solid border-blue-900 border-opacity-50 max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 text-2xl font-medium leading-6">
              <div className="flex flex-auto gap-5 justify-between">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/22615d814567696572a7b825fca55b1108de40faddb95d1ca4b03563136150bb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22615d814567696572a7b825fca55b1108de40faddb95d1ca4b03563136150bb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22615d814567696572a7b825fca55b1108de40faddb95d1ca4b03563136150bb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22615d814567696572a7b825fca55b1108de40faddb95d1ca4b03563136150bb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22615d814567696572a7b825fca55b1108de40faddb95d1ca4b03563136150bb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22615d814567696572a7b825fca55b1108de40faddb95d1ca4b03563136150bb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22615d814567696572a7b825fca55b1108de40faddb95d1ca4b03563136150bb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22615d814567696572a7b825fca55b1108de40faddb95d1ca4b03563136150bb?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                  className="shrink-0 aspect-square w-[60px]"
                />
                <div className="my-auto">
                  Jessica Yefremov
                  <br />
                  <span className="text-base ">MD, CWSP</span>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba42f930861dc5b6e30ff91aa674cef347b500e463a04fdb883f45bb93a1be9e?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="shrink-0 my-auto w-10 aspect-[1.03]"
              />
            </div>
            <div className="mt-7 text-base leading-6">
              “Great products and great prices! I am so happy to have found
              QCRx!”
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/288ba252a22cea890b580d9b2e32597242d890b5bc34e9cd99dee8872c4dfef8?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
      className="mt-7 aspect-[5.56] w-[51px]"
    />
    <div className="mt-28 text-5xl leading-10 text-center text-black w-[776px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
      Proudly serving an ever-expanding list of United States
    </div>
    <div className="mt-10 text-base leading-6 text-center text-black">
      Don't see your state? Tell us where you are.
    </div>
    <div className="flex gap-4 px-7 py-4 mt-8 text-sm font-medium text-white bg-blue-900 rounded-3xl max-md:px-5">
      <div>Contact Us</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7fcae6bb2fd0ffc0c3f026dacda540224a8f170dcb3a9a7cb012c588a851bd3?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
        className="shrink-0 self-start w-3.5 aspect-square fill-white"
      />
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/20139df1c31a3ef9cad51d3445cbdfe07799a7c24bbae1eb2996c8998a347b60?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
      className="mt-7 max-w-full aspect-[1.56] w-[976px]"
    />
    <div className="p-0.5 mt-32 max-w-full bg-blue-900 rounded-3xl w-[1340px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow px-16 py-16 text-2xl leading-6 text-white mix-blend-color-burn min-h-[814px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51e5d621655ff4b9f0ba41839f875f555dcf12d90d3957758615cfc850ca3159?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51e5d621655ff4b9f0ba41839f875f555dcf12d90d3957758615cfc850ca3159?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51e5d621655ff4b9f0ba41839f875f555dcf12d90d3957758615cfc850ca3159?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51e5d621655ff4b9f0ba41839f875f555dcf12d90d3957758615cfc850ca3159?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51e5d621655ff4b9f0ba41839f875f555dcf12d90d3957758615cfc850ca3159?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51e5d621655ff4b9f0ba41839f875f555dcf12d90d3957758615cfc850ca3159?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51e5d621655ff4b9f0ba41839f875f555dcf12d90d3957758615cfc850ca3159?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51e5d621655ff4b9f0ba41839f875f555dcf12d90d3957758615cfc850ca3159?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="relative text-5xl leading-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Setting New Standards: Elevating Compounding Quality
            </div>
            <div className="relative mt-12 font-medium max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              USP &lt;795&gt; Non-Sterile Compounding
            </div>
            <div className="relative mt-5 text-base leading-6 max-md:mr-2.5 max-md:max-w-full">
              Establishes guidelines to minimize errors
              <br />
              Provides requirements for final product quality
              <br />
              Packaging & labeling requirement for final products
            </div>
            <div className="relative mt-9 font-medium max-md:mr-2.5 max-md:max-w-full">
              USP &lt;797&gt; Sterile Compounding
            </div>
            <div className="relative mt-5 text-base leading-6 max-md:mr-2.5 max-md:max-w-full">
              Specifically addresses sterile compounding
              <br />
              Establishes positive & negative pressure cleanrooms
              <br />
              New requirements for sterility testing
            </div>
            <div className="relative mt-9 font-medium max-md:mr-2.5 max-md:max-w-full">
              USP &lt;800&gt; Handling of Hazardous Drugs
            </div>
            <div className="relative mt-5 mr-7 text-base leading-6 max-md:mr-2.5 max-md:max-w-full">
              Improved safety for pharmacy staff
              <br />
              Requires separation of hazardous and non-hazardous products 
              <br />
              Specifically addresses handling of hazardous materials
            </div>
            <div className="flex relative gap-4 self-start px-7 py-4 mt-12 text-sm font-medium text-blue-900 bg-white rounded-3xl max-md:px-5 max-md:mt-10">
              <div>Quality First</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f209e7543497fe4aabcf3d6e61dc28581df28d251f87d65584121518b2e5e19?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
                className="shrink-0 self-start w-3.5 aspect-square fill-blue-900"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd7a8aab0f8a0efdfbfae58b1c65e5fa92dac3d0e69915666a532f053a97983?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd7a8aab0f8a0efdfbfae58b1c65e5fa92dac3d0e69915666a532f053a97983?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd7a8aab0f8a0efdfbfae58b1c65e5fa92dac3d0e69915666a532f053a97983?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd7a8aab0f8a0efdfbfae58b1c65e5fa92dac3d0e69915666a532f053a97983?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd7a8aab0f8a0efdfbfae58b1c65e5fa92dac3d0e69915666a532f053a97983?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd7a8aab0f8a0efdfbfae58b1c65e5fa92dac3d0e69915666a532f053a97983?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd7a8aab0f8a0efdfbfae58b1c65e5fa92dac3d0e69915666a532f053a97983?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd7a8aab0f8a0efdfbfae58b1c65e5fa92dac3d0e69915666a532f053a97983?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
            className="z-10 grow w-full aspect-[0.83] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
    <div className="mt-24 text-5xl leading-10 text-center text-black max-md:mt-10 max-md:text-4xl">
      FAQ
    </div>
    <div className="flex flex-col justify-center py-0.5 mt-16 max-w-full text-black bg-white w-[921px] max-md:mt-10">
      <div className="self-start ml-4 text-2xl font-medium leading-6 max-md:max-w-full">
        What sets QCRx apart from other pharmacies?
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
      <div className="flex flex-col px-3.5 mt-8 max-md:max-w-full">
        <div className="text-base leading-6 max-md:max-w-full">
          Mattis tincidunt blandit scelerisque pellentesque. Diam ut gravida
          molestie platea sed facilisis enim facilisi ut. Gravida tristique
          aliquet est mi dolor pretium. Velit magna sit fames convallis. Eget
          suscipit id proin nisl gravida adipiscing mauris ultricies.
          Malesuada ut nullam massa ullamcorper netus pharetra quis maecenas
          arcu. Pharetra in hac aliquet interdum dui augue. Euismod faucibus
          gravida vulputate semper. Vitae et feugiat vel et aenean ac in.
        </div>
        <div className="flex gap-5 mt-16 text-2xl font-medium leading-6 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto">What does 795/797/800 mean?</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/360b878ba782381a3b031148289787cb84a89d1d8ee28ef3c51c572677872543?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
      </div>
      <div className="shrink-0 mt-4 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
      <div className="flex gap-5 px-5 mt-8 text-2xl font-medium leading-6 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          What is the difference between a 503A/B and retail pharmacies?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/360b878ba782381a3b031148289787cb84a89d1d8ee28ef3c51c572677872543?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
      <div className="flex gap-5 mt-8 text-2xl font-medium leading-6 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          What types of medications do we compound?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/360b878ba782381a3b031148289787cb84a89d1d8ee28ef3c51c572677872543?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
      <div className="flex gap-5 mt-8 text-2xl font-medium leading-6 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex-auto max-md:max-w-full">
          What type of doctors/clinics should we target?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/360b878ba782381a3b031148289787cb84a89d1d8ee28ef3c51c572677872543?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
      <div className="flex gap-5 px-5 mt-8 text-2xl font-medium leading-6 max-md:flex-wrap">
        <div className="flex-auto max-md:max-w-full">
          Depending on the type of doctor/clinic what products should I pitch
          them?
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/360b878ba782381a3b031148289787cb84a89d1d8ee28ef3c51c572677872543?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
      <div className="flex gap-5 mt-8 text-2xl font-medium leading-6 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex-auto">How many states do we operate in?</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/360b878ba782381a3b031148289787cb84a89d1d8ee28ef3c51c572677872543?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 self-start aspect-square w-[18px]"
        />
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 max-md:max-w-full" />
    </div>
    <div className="shrink-0 mt-24 max-w-full h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 w-[1340px] max-md:mt-10" />
    <div className="flex gap-5 justify-between mt-11 w-full max-w-[1340px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 px-5 my-auto text-4xl leading-10 text-black max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto my-auto">Our Accreditation</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6166285e7bc924b98a893e850aa53d31d61b0e3afb4aab8b0e9e54144073c1df?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 max-w-full aspect-[3.45] w-[150px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08c75539617d3657d6add0d91193c7b3900507d27c246cfc99f55b07daec1d26?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 max-w-full aspect-[5.26] w-[230px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a240b5481b1c63c7c1a49953104f690f8d9ec681756003bedd74766a8c2987b?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 max-w-full aspect-[3.23] w-[139px]"
        />
      </div>
      <div className="flex gap-5 justify-between px-7 py-4 text-sm font-medium text-white bg-blue-900 rounded-3xl max-md:px-5">
        <div>Learn more</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7fcae6bb2fd0ffc0c3f026dacda540224a8f170dcb3a9a7cb012c588a851bd3?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="shrink-0 self-start w-3.5 aspect-square fill-white"
        />
      </div>
    </div>
    <div className="flex justify-center items-center px-16 py-20 mt-11 w-full text-white bg-white rounded-3xl mix-blend-color-burn max-w-[1340px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center mt-20 mb-10 max-w-full w-[685px] max-md:my-10">
        <div className="self-stretch text-5xl leading-10 text-center max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Discover the perfect synergy between health and partnership.
        </div>
        <div className="mt-9 text-base leading-6 text-center w-[445px] max-md:max-w-full">
          Click to unlock a treasure trove of insights and products that
          elevate both your well-being and relationships.
        </div>
        <div className="flex gap-4 px-6 py-4 mt-11 text-sm font-medium text-black bg-white rounded-3xl max-md:px-5 max-md:mt-10">
          <div className="grow">Register for full catalog</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc6ade343327dc987a7262be23b9cbf715b1d85b041f5219b12f75dc5d0b2041?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
            className="shrink-0 self-start w-3.5 aspect-square fill-black"
          />
        </div>
      </div>
    </div>
    <div className="flex gap-5 justify-between items-start px-5 mt-16 w-full text-black max-w-[1332px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-stretch">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/74ef28bc65354f707f3bc147aa69f77aa8dfde825a193e5d34a4c0b3d95f1446?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="max-w-full aspect-[3.23] w-[120px]"
        />
        <div className="mt-8 text-4xl leading-8">
          Want to <br />
          see more? 
        </div>
        <div className="mt-4 text-base leading-6">
          Register to download our catalog 
        </div>
        <div className="flex gap-4 px-14 py-4 mt-8 text-sm font-medium text-white whitespace-nowrap bg-blue-900 rounded-3xl max-md:px-5">
          <div>Register</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7fcae6bb2fd0ffc0c3f026dacda540224a8f170dcb3a9a7cb012c588a851bd3?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
            className="shrink-0 self-start w-3.5 aspect-square fill-white"
          />
        </div>
      </div>
      <div className="flex flex-col mt-1.5">
        <div className="text-xl font-semibold leading-6">Pages</div>
        <div className="mt-6 text-base leading-8">
          Home
          <br />
          About
          <br />
          Catalog
          <br />
          Facility Tour
          <br />
          Patients
          <br />
          Providers
          <br />
          Contact Us
        </div>
      </div>
      <div className="flex flex-col mt-1">
        <div className="text-xl font-semibold leading-6">Catalog</div>
        <div className="mt-6 text-base leading-8">
          Men’s Health
          <br />
          Women’s Health
          <br />
          Weight Loss
          <br />
          Sexual Health
          <br />
          IV & Vitamins
          <br />
          Dermatology
          <br />
        </div>
      </div>
      <div className="flex flex-col mt-1.5">
        <div className="text-xl font-semibold leading-6">Resources</div>
        <div className="mt-7 text-base leading-8">
          Quality First
          <br />
          Accreditations
          <br />
          Blog
          <br />
          Privacy Policy
        </div>
      </div>
      <div className="flex flex-col mt-1.5 text-base leading-6">
        <div className="text-xl font-semibold leading-6">Address</div>
        <div className="mt-7 leading-6">
          801 S. Rancho Dr. Suite E7Las Vegas, NV 89106
        </div>
        <div className="mt-7">702-984-6640</div>
        <div className="mt-8">info@QCRxusa.com</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6029ddcb50a2d210bd2808b4b74216043dd2f4746a83b44e7a235803918850d5?apiKey=b26feb37897a4e1fabbd7c4d6fcc83fa&"
          className="mt-9 max-w-full aspect-[3.85] w-[108px]"
        />
      </div>
    </div>
    <div className="shrink-0 mt-16 max-w-full h-px border border-solid bg-blue-900 bg-opacity-50 border-blue-900 border-opacity-50 w-[1340px] max-md:mt-10" />
    <div className="mt-7 text-sm leading-5 text-black max-md:max-w-full">
      Quality Compounding Rx of America © 2024 | All rights reserved | Powered
      by Webloo
    </div>
  </div>
);
}
