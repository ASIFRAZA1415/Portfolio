import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets';



const Foooter = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      
      <div className='text-center '>
        <Image src={isDarkMode ? assets.logo : assets.logo} alt='' className='w-36 mx-auto mb-0.2'/>
        
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            asifraza583@gmail.com

        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Asif Hussain. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>< a target='blank' href='https://www.instagram.com/___asif__raza/'></a>Instagram</li>
            <li>< a target='blank' href='https://www.linkedin.com/in/asifhussain-/'></a>Linkdin</li>
            <li>< a target='blank' href='https://github.com/ASIFRAZA1415'></a>GitHub</li>
            <li>< a target='blank' href='https://x.com/AsifRaza1000'></a>Twitter</li>
        </ul>
      </div>
    </div>
  )
}

export default Foooter
