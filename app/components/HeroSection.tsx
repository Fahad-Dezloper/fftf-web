import React from 'react'

export default function HeroSection() {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
        <div className='flex gap-2 h-full'>
            <div className='w-[65vw] rounded-xl bg-red-400'>hi</div>
            <div className='w-full rounded-xl flex flex-col gap-2 bg-blue-400 p-2 overflow-hidden'>
                <div className='w-full h-full border border-red-400 bg-yellow-400 rounded-xl'></div>
                <div className='w-full h-[10vh] bg-purple-400 rounded-xl'></div>
            </div>
        </div>
        <div className='flex gap-2 h-[40vh]'>
            <div className='w-[65vw] rounded-xl bg-green-400'>hi</div>
            <div className='w-full rounded-xl bg-yellow-400'>hello</div>
        </div>
    </div>
  )
}