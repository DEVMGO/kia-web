import React, { useState } from 'react'
import Image from 'next/image'

// Icons
import { FiSearch, FiUser } from 'react-icons/fi';
import { HiMenuAlt1 } from 'react-icons/hi';

// Image
import Logo from '../../public/assets/img/logo2.png'

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

    const menuItems = [
        {
          title: 'طراحی سایت',
          url: '#',
          children: [],
        },
        {
          title: 'نمونه کارها',
          url: '#',
          children: [],
        },
        {
          title: 'سایت اختصاصی',
          url: '#',
          children: [],
        },
        {
          title: 'مقالات',
          url: '#',
          children: [],
        },
        {
          title: 'تماس باما',
          url: '#',
          children: [],
        },
      ]

  return (
    <div className='w-full h-20 flex items-center justify-between px-10 res4:px-4 bg-gradient-to-r from-navy_blue via-navy_light_blue to-navy_blue z-[999]'>
        <div className='w-24 flex items-center justify-start'>
          <button className='text-3xl text-white ml-5 hidden res5:block' onClick={handleMenu}>
            <HiMenuAlt1 />
          </button>
          <Image src={Logo} alt='kia web' className='w-full h-full' />
        </div>

        <ul className={`h-full res5:h-auto flex items-center justify-center res5:flex-col right-0 res5:w-full z-[52] res5:bg-dark_purple res5:absolute transition-all duration-300 ease-in-out overflow-hidden ${menu ? 'top-20 max-h-screen' : 'res5:top-20 res5:max-h-0'}`}>
          {menuItems.map((item, index) => (
              <li key={index + 'menu'} className='h-full res5:h-12 text-xs font-light hover:text-aqua text-white flex items-center justify-center mx-4 transition-all duration-300 ease-in-out overflow-hidden before:transition-all before:duration-300 before:ease-in-out relative before:absolute before:right-0 before:bottom-0 before:w-0 hover:before:w-2/3 before:border-b-2 border-transparent before:border-aqua cursor-pointer'>
              {item.title}
              </li>
          ))}
        </ul>

        <div className='w-32 flex items-center justify-end'>
        <button className='cursor-pointer text-2xl text-white search'><FiSearch /></button>
        <button className='cursor-pointer text-2xl text-white mr-4 user'><FiUser /></button>
        </div>
    </div>
  )
}

export default Navbar