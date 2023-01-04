import React from 'react'
import Image from 'next/image'
// Images
import Head_Man from '../../../public/assets/img/head-man.png';
import leftImage from '../../../public/assets/img/test.png';

const SectionThree = ({ list }) => {
  return (
    <div className='w-full flex items-center justify-between res4:flex-col bg-white py-10 px-0'>
      <div className='w-1/2 res4:w-full flex items-center justify-center p-10'>
        <div className='w-2/3 res4:w-full flex items-start justify-center flex-col'>
          <div className='w-24 h-24 res4:w-12 res4:h-12'>
            <Image src={Head_Man} alt='icon' className='w-full h-full' />
          </div>
          <h4 className='text-2xl res4:text-lg text-navy_blue_dark font-extrabold mt-10 mb-4'>طراحی</h4>
          <h4 className='text-2xl res4:text-lg text-navy_blue_dark font-extrabold'>سایت اختصاصی مشهد</h4>
          <p className='text-justify text-sm res4:text-xs text-gray-600 my-10'>با بهره گیری از طراحی سایت اختصاصی، یک تصویر مناسب و حرفه‌ای از کسب و کار شما در ذهن بازدیدکننده نقش می‌بندد</p>
          <div className='w-full flex items-center justify-end'>
            <button className='btn text-sm res4:text-xs text-white bg-gradient-to-r from-[#6f8fe3] to-aqua rounded-2xl py-[10px] px-6'>سفارش طراحی سایت</button>
          </div>
        </div>
      </div>

      <div className='w-1/2 res4:w-full res4:my-4 flex items-start justify-center flex-col p-0 res4:pr-20 overflow-hidden'>
        <Image src={leftImage} alt='image' className='w-full h-full m-0 transform -translate-x-2' />
      </div>
    </div>
  )
}

export default SectionThree;