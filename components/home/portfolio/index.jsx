import React from 'react'
import Image from 'next/image'
// Images
import Img1 from '../../../public/assets/img/test-3.png';
import Img2 from '../../../public/assets/img/test-4.png';
import Img3 from '../../../public/assets/img/test-5.png';
import Img4 from '../../../public/assets/img/test-1.png';
import Img5 from '../../../public/assets/img/test-7.png';
import Img6 from '../../../public/assets/img/test-3.png';
import Img8 from '../../../public/assets/img/test-5.png';
import Img7 from '../../../public/assets/img/site.png'
// style
import style from './style.module.css'

const Portfolio = () => {
  return (
    <div className='w-full flex items-center justify-end flex-col bg-white py-20 px-10 res4:px-4 m-0'>
        <h3 className='text-2xl res4:text-sm text-navy_blue_dark font-extrabold'>برخی از نمونه کارهای طراحی سایت کیاوب</h3>
        <p className='w-1/2 res4:w-full text-base res4:text-xs text-center my-10 text-gray-500'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده 
            از طراحان گرافیک است مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>

        <div className={style.portfolio}>
          <div className='w-full flex items-stretch justify-center res4:flex-col res4:items-start gap-2'>
            <div className='w-1/2 res4:w-full res4:order-2 h-auto grid grid-cols-2 items-start justify-center box-border gap-4'>
              <div className={style.miniBox}>
                <Image src={Img1} alt='example' />
                <div className={style.data_Site}>
                  <h3>سایت آموزشی کالج</h3>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  <button className='btn'>مشاهده سایت</button>
                </div>
              </div>
              <div className={style.miniBox}>
                <Image src={Img2} alt='example' />
                <div className={style.data_Site}>
                  <h3>سایت آموزشی کالج</h3>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  <button className='btn'>مشاهده سایت</button>
                </div>
              </div>
              <div className={style.miniBox}>
                <Image src={Img3} alt='example' />
                <div className={style.data_Site}>
                  <h3>سایت آموزشی کالج</h3>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  <button className='btn'>مشاهده سایت</button>
                </div>
              </div>
              <div className={style.miniBox}>
                <Image src={Img4} alt='example' />
                <div className={style.data_Site}>
                  <h3>سایت آموزشی کالج</h3>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  <button className='btn'>مشاهده سایت</button>
                </div>
              </div>
            </div>

            <div className={style.bigBox}>
              <Image src={Img5} alt='example' />
              <div className={style.data_Site}>
                <h3>سایت آموزشی کالج</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <button className='btn'>مشاهده سایت</button>
              </div>
            </div>
          </div>
          
          <div className='w-full flex items-start justify-center res4:flex-col mt-4'>
            <div className={style.bigBox}>
              <Image src={Img6} alt='example' className='w-full h-full' />
                <div className={style.data_Site}>
                  <h3>سایت آموزشی کالج</h3>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  <button className='btn'>مشاهده سایت</button>
                </div>
            </div>
            <div className='w-[55%] res4:w-full flex items-start justify-center gap-4 mr-3 res4:mr-0 res4:mt-2'>
              <div className={style.miniBox}>
                <Image src={Img7} alt='example' />
                <div className={style.data_Site}>
                  <h3>سایت آموزشی کالج</h3>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  <button className='btn'>مشاهده سایت</button>
                </div>
              </div>
              <div className={style.miniBox}>
                <Image src={Img8} alt='example' />
                <div className={style.data_Site}>
                  <h3>سایت آموزشی کالج</h3>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  <button className='btn'>مشاهده سایت</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className='btn text-sm res4:text-xs text-white bg-gradient-to-r from-[#6f8fe3] to-aqua rounded-2xl py-[10px] px-6'>مشاهده همه پروژه‌ها</button>
    </div>
  )
}

export default Portfolio;