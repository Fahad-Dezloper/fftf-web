import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-full h-full p-4 flex gap-3'>
            {/* <Image src="/Logo/LogoTT.png" alt="Logo" width={100} height={100} className='w-36 h-36' /> */}
            <div className='w-fit h-full'>
                <div className='w-[18vw] h-fit '>
                    <Image src={"/Logo/LogoT.svg"} alt="Logo" width={100} height={100} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="w-full h-full flex flex-col px-8 py-4 gap-6 bg-[#F1E9DD]">
                <div className="flex flex-row gap-16 w-full">
                    {/* First nav bar: Festival section */}
                    <nav className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base mb-2">Festival</h3>
                        <a href="#" className="hover:underline text-sm text-[#333]">About us</a>
                        <a href="#" className="hover:underline text-sm text-[#333]">Past Fests</a>
                        <a href="#" className="hover:underline text-sm text-[#333]">Our Chefs</a>
                        <a href="#" className="hover:underline text-sm text-[#333]">Media Coverage</a>
                        <a href="#" className="hover:underline text-sm text-[#333]">Blog</a>
                    </nav>
                    {/* Second nav bar: Get Involved section */}
                    <nav className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base mb-2">Get Involved</h3>
                        <a href="#" className="hover:underline text-sm text-[#333]">Collaborate with us</a>
                        <a href="#" className="hover:underline text-sm text-[#333]">Sponsorship</a>
                        <a href="#" className="hover:underline text-sm text-[#333]">Contact us</a>
                    </nav>
                </div>
            </div>
            {/* <div className='w-fit h-full'> */}
                {/* <div className='w-[18vw] h-fit '>
                    <Image src={"/Logo/Saag.png"} alt="Logo" width={100} height={100} className='w-full h-full object-cover' />
                </div> */}
            {/* </div> */}
        </div>
    )
}