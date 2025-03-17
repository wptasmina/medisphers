import { Button } from '@/components/ui/button'
import { ArrowUpRight, Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <section>
      <div className="w-11/12 mx-auto  py-8 px-3 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center self-start md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none self-start  px-3 md:px-0">
            <h2 className='pt-3 lg:text-6xl text-4xl font-extrabold'> Your <span className='text-[#022dbb]'>Health</span>,<br/>Our <span className='text-[#022dbb]'>Priority</span></h2>
            <p className='py-4 lg:w-[550px]'>MediSheper helps hospitals perform their daily operations quickly, accurately, and efficiently with the help of advanced technology.</p>
            <Link href="/" >
            <Button className="bg-[#022dbb] px-4 py-2 inline-flex cursor-pointer " >
              Book appointment<ArrowUpRight />
            </Button>
            </Link>
          </div>
          </div>

          {/* ✅ Regular img tag for React */}
          <div>
            <img
              src="/banner.png"
              width={600}
              
              className="rounded"
              alt="Doctor image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
