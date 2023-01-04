import React from 'react'
import Image from 'next/image'
// Icons
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import Responsive from '../../../public/assets/img/res1.png'
import Roket from '../../../public/assets/img/roket1.png'
import Sible from '../../../public/assets/img/sible.png'
import Shop from '../../../public/assets/img/shop1.png'
// style
import style from '../../../styles/style.module.css'

const SectionTwo = ({ list }) => {
  return (
    <div className={style.sectionTwo}>
      <div className='w-full flex items-center justify-center flex-col p-0 m-0'>
        <h3 className='text-2xl res4:text-base text-white mb-10'>طراحی سایت با <strong className='text-aqua'>سئو</strong> رایگان</h3>
        <p className='w-3/4 res4:w-full res4:px-8 text-sm text-gray-300 text-center res4:text-justify leading-6'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>

        <div className='w-3/4 res4:w-full res4:p-4 grid grid-cols-22 res4:grid-cols-21 gap-10 mt-32'>
          {list?.map((item, index) => (
            <div key={index + 'section2'} className='w-full bg-dark_purple rounded-2xl flex items-center justify-center flex-col py-4 p-10 res4:p-4'>
              <div className='w-full flex items-start justify-start'>
                <Image src={item.icon} alt={item.title} className='w-16 res4:w-10 h-auto' />
                <h4 className='text-base res4:text-sm text-aqua mt-3 mr-2'>{item.title}</h4>
              </div>

              <p className='text-gray-300 text-justify text-xs leading-7 my-3'>{item.description}</p>

              <div className='w-full flex items-center justify-end'>
                <button className='text-white text-2xl res4:text-xl'><HiOutlineArrowNarrowLeft /></button>
              </div>
            </div>
          ))} 
        </div>

        <div className='w-full h-52 z-50 border-r-[100vw] border-r-transparent border-solid border-b-[15vh] border-b-white'></div>
      </div>
    </div>
  )
}

export default SectionTwo;

SectionTwo.defaultProps= {
  list: [
    {
      title: 'طراحی سایت ریسپانسیو',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و با هدف بهبود ابزارهای کاربردی می باشد.',
      icon: Responsive,
    },
    {
      title: 'طراحی سایت با سئو',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و با هدف بهبود ابزارهای کاربردی می باشد.',
      icon: Roket,
    },
    {
      title: 'طراحی سایت اختصاصی',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و با هدف بهبود ابزارهای کاربردی می باشد.',
      icon: Sible,
    },
    {
      title: 'طراحی فروشگاه اینترنتی',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و با هدف بهبود ابزارهای کاربردی می باشد.',
      icon: Shop,
    },
  ]
}