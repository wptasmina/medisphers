import { Button } from '@/components/ui/button'
import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="w-11/12 mx-auto max-w-screen-xl py-8 sm:px-6 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center self-start md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none self-start">
            <h2 className='pt-3 md:text-6xl text-4xl font-extrabold'> Your <span className='text-blue-600'>Health</span>, Our <span className='text-blue-600'>Priority</span> </h2>
            <p className='py-4'>MediSheper helps hospitals perform their daily operations quickly, accurately, and efficiently with the help of advanced technology.</p>
            <Button >Explorer</Button>

          </div>
          </div>

          {/* ✅ Regular img tag for React */}
          <div>
            <img
              src="/banner.jpg"
              width={600}
              height={600}
              className="rounded"
              alt="Doctor image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
