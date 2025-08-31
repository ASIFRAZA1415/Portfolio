import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";



const Foooter = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      
      <div className='text-center '>
        <Image src={isDarkMode ? assets.logo : assets.logo} alt='' className= 'w-24 sm:w-20 md:w-22 lg:w-25 mx-auto mb-1 w-30 mx-auto mb-0.2 dark:invert dark:brightness-0'/>
        
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            asifraza583@gmail.com

        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Asif Hussain. All rights reserved.</p>
        
          <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0 text-2xl'>
          <li>
            <a href='https://www.instagram.com/___asif__raza/' target='_blank' rel="noopener noreferrer">
              <FaInstagram className='hover:text-pink-500 transition-colors duration-300' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/asifhussain-/' target='_blank' rel="noopener noreferrer">
              <FaLinkedin className='hover:text-blue-600 transition-colors duration-300' />
            </a>
          </li>
          <li>
            <a href='https://github.com/ASIFRAZA1415' target='_blank' rel="noopener noreferrer">
              <FaGithub className='hover:text-gray-400 transition-colors duration-300' />
            </a>
          </li>
          <li>
            <a href='https://x.com/AsifRaza1000' target='_blank' rel="noopener noreferrer">
              <FaTwitter className='hover:text-sky-500 transition-colors duration-300' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Foooter
