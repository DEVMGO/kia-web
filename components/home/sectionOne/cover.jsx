import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import MiniLogo from '../../../public/assets/img/mini-logo.png'

const Cover = ({ items }) => {
  return (
    <div className='w-[400px] res3:w-full res3:p-4 h-screen flex items-center justify-center flex-col'>
        <div className='flex items-center justify-center gap-4 mb-4'>
          <Image src={MiniLogo} alt='کیاوب' className='w-auto h-5 object-contain' />
          <h1 className='text-xl res4:text-base font-extrabold text-aqua'>طراحی سایت کیاوب</h1>
        </div>
        <h2 className='text-base res4:text-xs text-white'>طراحی سایت مشهد - طراحی سایت فروشگاهی مشهد</h2>


        <Swiper 
          pagination={true} 
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }} 
          modules={[Autoplay, Pagination]}
          className="w-full"
          id='cover'
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index + 'slider-cover'}>
              <div className='w-full h-64 flex items-center justify-evenly flex-col mb-10'>
                  <div className='w-full flex items-center justify-center flex-col'>
                      <h5 className='text-lg res4:text-sm text-kia_red mb-4'>{item.title}</h5>
                      <p className='text-sm res4:text-xs text-center text-gray-200 leading-7'>{item.description}</p>
                  </div>
                  <div className='w-full flex items-center justify-between res4:justify-evenly'>
                      <button className='btn text-sm res4:text-xs text-white bg-gradient-to-r from-[#6f8fe3] to-aqua rounded-2xl py-[10px] px-6 res4:px-3'>سفارش طراحی سایت</button>
                      <button className='btn text-sm res4:text-xs border-2 border-aqua rounded-2xl text-aqua py-2 px-6 res4:px-3'>نمونه‌کار طراحی سایت</button>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Cover;

Cover.defaultProps= {
  items: [
    {
      title: 'بهترین شرکت طراحی اختصاصی در مشهد',
      description: 'طراحی سایت کیاوب مجری ایده‌های ناب و خلاقانه شماست به ما اعتماد کنید ... ما شما را شگفت زده خواهیم کرد'
    },
    {
      title: 'بهترین شرکت طراحی اختصاصی در مشهد',
      description: 'طراحی سایت کیاوب مجری ایده‌های ناب و خلاقانه شماست به ما اعتماد کنید ... ما شما را شگفت زده خواهیم کرد'
    },
    {
      title: 'بهترین شرکت طراحی اختصاصی در مشهد',
      description: 'طراحی سایت کیاوب مجری ایده‌های ناب و خلاقانه شماست به ما اعتماد کنید ... ما شما را شگفت زده خواهیم کرد'
    },
    {
      title: 'بهترین شرکت طراحی اختصاصی در مشهد',
      description: 'طراحی سایت کیاوب مجری ایده‌های ناب و خلاقانه شماست به ما اعتماد کنید ... ما شما را شگفت زده خواهیم کرد'
    },
    {
      title: 'بهترین شرکت طراحی اختصاصی در مشهد',
      description: 'طراحی سایت کیاوب مجری ایده‌های ناب و خلاقانه شماست به ما اعتماد کنید ... ما شما را شگفت زده خواهیم کرد'
    },
  ]
}