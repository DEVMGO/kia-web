import React from 'react'
// icons
import { FiMail, FiPhone } from 'react-icons/fi';

// style
import style from '../../../styles/style.module.css'

const Moshavere = () => {
  return (
    <div className={style.moshavere}>
        <div className='w-1/2 res4:w-full flex items-center justify-end res4:justify-center'>
            <div className='w-2/3 res4:w-11/12 flex items-start justify-center flex-col'>
                <h4 className='text-2xl res4:text-base text-white'>مشاوره رایگان کیاوب</h4>
                <p className='w-3/4 res4:w-11/12 text-sm res4:text-xs text-gray-100 my-4 leading-7 text-justify font-light'>برای مشاوره رایگان کافیست شماره تماس و ایمیل خود را وارد کنید تا ما در چند ساعت آینده با شما ارتباط برقرار کنیم</p>
            </div>
        </div>
        
        <div className='w-1/2 res4:w-full flex items-center justify-center'>
            <div className='w-2/3 res4:w-11/12 flex items-start justify-center flex-col'>
                <div className='w-full flex items-center justify-start'>
                    <span className='w-12 h-12 res4:w-10 res4:h-10 border-2 border-aqua rounded-full flex items-center justify-center text-white text-2xl res4:text-lg ml-4'>
                        <FiMail />
                    </span>
                    <span className='w-12 h-12 res4:w-10 res4:h-10 border-2 border-aqua rounded-full flex items-center justify-center text-white text-2xl res4:text-lg'>
                        <FiPhone />
                    </span>
                </div>

                <div className='w-5/6 res4:w-11/12 h-12 bg-white rounded-3xl overflow-hidden my-8 px-4'>
                    <input type='text' placeholder='ایمیل یا شماره خود را وارد کنید' className='w-full h-full text-sm text-gray-700 bg-transparent border-none outline-none placeholder:text-gray-400 placeholder:text-xs' />
                </div>
                <div className='w-5/6 res4:w-11/12 flex items-center justify-end'>
                    <button className='btn text-sm res4:text-xs text-navy_blue_dark bg-aqua py-3 px-10 res4:px-8 rounded-3xl'>ارسال</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Moshavere