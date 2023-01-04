import React from "react";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
// Images
import Img1 from '../../../public/assets/img/samsung.png'
import Img2 from '../../../public/assets/img/panasonic.png'
import Img3 from '../../../public/assets/img/Saipa.png'
import Img4 from '../../../public/assets/img/bank-saderat.png'
import Img5 from '../../../public/assets/img/adata.png'
import Img6 from '../../../public/assets/img/pay.png'

const Trust = ({ listOffices }) => {
  return (
    <div className='w-full flex items-center justify-end flex-col'>
        <h4 className='text-2xl res4:text-base text-white mb-7'>چه کسانی به ما اطمینان کردند</h4>
        <p className='w-96 res3:w-11/12 text-sm res4:text-xs text-center text-gray-300 mb-0'>طراحی سایت کیاوب مجری ایده‌های ناب و خلاقانه شماست به ما اعتماد کنید ... ما شما را شگفت طده خواهیم کرد</p>

        <div className='w-5/6 flex items-center justify-center transform translate-y-24 z-50' id="trustSlider">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {listOffices?.map((item, index) => (
                    <SwiperSlide key={index + 'slider'}>
                        <div className="w-full h-32 rounded-2xl flex items-center justify-center bg-dark_purple p-4">
                            <Image src={item.image} alt='offices' className="w-full h-20 object-contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default Trust;

Trust.defaultProps= {
    listOffices: [
        {
            id: 1,
            image: Img1,
        },
        {
            id: 2,
            image: Img2,
        },
        {
            id: 3,
            image: Img3,
        },
        {
            id: 4,
            image: Img4,
        },
        {
            id: 5,
            image: Img5,
        },
        {
            id: 6,
            image: Img6,
        },
    ]
}