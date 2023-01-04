import React from 'react'
// Icons
import { FiMail, FiPhone } from 'react-icons/fi';
import { BiMobileAlt } from 'react-icons/bi';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = ({ location, email, phone, mobile}) => {
  return (
    <div className='w-full bg-navy_blue_dark flex items-start justify-center p-10 res4:p-5'>
        <div className='w-4/5 res5:w-full p-10 res4:p-0 flex items-center justify-center flex-col border-t border-slate-400 border-opacity-25'>
            <div className='w-11/12 flex items-center justify-between res4:flex-col'>
                <div className='flex items-center justify-between m-4'>
                    <h5 className='text-xs text-gray-100 ml-4'>{email}</h5>
                    <span className='btn w-14 h-14 flex items-center justify-center rounded-full border-2 border-purple'>
                        <FiMail className='text-xl text-aqua' />
                    </span>
                </div>
                
                <div className='flex items-center justify-between m-4'>
                    <h5 className='text-xs text-gray-100 ml-4'>{mobile}</h5>
                    <span className='btn w-14 h-14 flex items-center justify-center rounded-full border-2 border-purple'>
                        <BiMobileAlt className='text-xl text-aqua' />
                    </span>
                </div>
                
                <div className='flex items-center justify-between m-4'>
                    <h5 className='text-xs text-gray-100 ml-4'>{phone}</h5>
                    <span className='btn w-14 h-14 flex items-center justify-center rounded-full border-2 border-purple'>
                        <FiPhone className='text-xl text-aqua' />
                    </span>
                </div>
            </div>

            <div className='w-11/12 flex items-center justify-between res4:flex-col mt-20 res4:mt-8'>
                <div className='flex items-start justify-center flex-col res4:mb-8'>
                    <h5 className='text-sm text-white'>آدرس ما:</h5>
                    <p className='text-xs text-white mt-4'>{location}</p>
                </div>

                <div className='flex items-end justify-between'>
                    <span className='btn cursor-pointer w-11 h-11 rounded-full border-2 border-purple flex items-center justify-center mr-4'>
                        <BsInstagram className='text-xl text-white' />
                    </span>
                    <span className='btn cursor-pointer w-11 h-11 rounded-full border-2 border-purple flex items-center justify-center mr-4'>
                        <BsTwitter className='text-xl text-white' />
                    </span>
                    <span className='btn cursor-pointer w-11 h-11 rounded-full border-2 border-purple flex items-center justify-center mr-4'>
                        <FaFacebookF className='text-xl text-white' />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;

Footer.defaultProps= {
    location: 'مشهد، بلوار دانشجو، نبش‌دانشجوی 21 پلاک 83 واحد یک',
    email: 'info@kiawebsite.ir',
    mobile: '0936 302 3789',
    phone: '051-5253 1235'
}