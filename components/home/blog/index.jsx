import React from "react";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
// icons
import { BiComment } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

// Images
import Img1 from '../../../public/assets/img/bg7.jpg'
import Img2 from '../../../public/assets/img/sketch.jpeg'
import Img3 from '../../../public/assets/img/bg6.jpeg'
import Img4 from '../../../public/assets/img/bg8.jpg'
import Img5 from '../../../public/assets/img/bg3.jpg'
import Img6 from '../../../public/assets/img/bg2.png'
// style
import style from '../../../styles/style.module.css'

const Blog = ({ listOffices }) => {
  return (
    <div className={style.blog}>
        <div className='w-full h-32 z-50 border-r-[100vw] border-r-transparent border-solid border-t-[12vh] border-t-white mb-10'></div>

        <h3 className='text-2xl res4:text-lg text-white mb-7'>مقالات طراحی سایت کیاوب</h3>

        <div className='w-5/6 flex items-center justify-center z-50' id="blogSlider">
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
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1224: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {listOffices?.map((item, index) => (
                    <SwiperSlide key={index + 'slider'}>
                        <div className="w-full flex items-center justify-between flex-col p-0 overflow-hidden">
                            <div className="w-full bg-white rounded-md overflow-hidden">
                                <div className="w-full h-48 overflow-hidden">
                                    <Image src={item.image} alt={item.title} className="w-full h-full object-fill" />
                                </div>
                                <div className="w-full h-52 p-6 flex items-start justify-center flex-col">
                                    <h3 className="text-base text-navy_blue_dark">{item.title}</h3>
                                    <p className="text-xs text-gray-500 text-justify my-3">{item.desc}</p>
                                    <div className="w-full flex items-center justify-end">
                                        <p className="flex items-center text-sm text-gray-500 mr-2">{item.message.toLocaleString('fa-IR')} <BiComment className="mr-1" /></p>
                                        <p className="flex items-center text-sm text-gray-500 mr-2">{item.liked.toLocaleString('fa-IR')} <AiOutlineHeart className="mr-1" /></p>
                                    </div>
                                </div>
                            </div>
                            <button className="btn mt-2 w-full rounded-md flex items-center justify-center text-aqua text-sm font-light bg-dark_purple py-3">مشاهده <HiOutlineArrowNarrowLeft className="text-xl mr-2" /></button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <button className='btn text-sm text-white bg-gradient-to-r from-[#6f8fe3] to-aqua rounded-xl py-[10px] px-6'>مشاهده همه مقالات</button>
    </div>
  )
}

export default Blog;

Blog.defaultProps= {
    listOffices: [
        {
            id: 1,
            image: Img1,
            title: 'سیستم‌های چندگانه',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
            liked: 50,
            message: 32,
        },
        {
            id: 2,
            image: Img2,
            title: 'وایر فریم در طراحی',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
            liked: 40,
            message: 18,
        },
        {
            id: 3,
            image: Img3,
            title: 'نقش مانیتور در دید مناسب',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
            liked: 25,
            message: 20,
        },
        {
            id: 4,
            image: Img4,
            title: 'خانه یا محل کار',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
            liked: 65,
            message: 30,
        },
        {
            id: 5,
            image: Img5,
            title: 'نقش مانیتور در دید مناسب',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
            liked: 10,
            message: 19,
        },
        {
            id: 6,
            image: Img6,
            title: 'نقش مانیتور در دید مناسب',
            desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
            liked: 28,
            message: 20,
        },
    ]
}