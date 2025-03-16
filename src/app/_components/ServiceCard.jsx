<<<<<<< HEAD

import { Button } from '@/components/ui/button';
import { ArrowUpRight, LayoutList } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function ServiceCard({ item }) {
    const { img, name, year,title, availability, datetime, desc } = item;
  
=======
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ item }) {
  const { img, name, year, availability, datetime, desc } = item;

>>>>>>> 06b3a8256cb79b2e66d5c90770ae0962797b1863
  return (
    <div className=" p-4 overflow-hidden rounded-lg shadow-sm hover:shadow-lg hover:scale-110 transition-all ease-in-out border">
      <img
        alt="image"
        src={img}
        className="h-56 w-full object-cover  object-right-top bg-slate-50 rounded-t-xl"
      />

      <div className="bg-white md:px-4 px-2">
        <div className='flex justify-between items-center gap-4 mt-4'>
          <p className='bg-blue-50 rounded-full px-4 py-1 text-sm font-normal text-blue-600'> {title}</p>
          <p className='bg-blue-50 rounded-full px-4  py-1 text-sm font-normal text-blue-600'>Year: {year}</p>
        </div>
        <h3 className="mt-2 text-lg text-gray-900 font-bold">{name}</h3>
        <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500 ">
          {desc}
        </p>

      <div className='flex lg:gap-4 gap-2 justify-center items-center mb-4'>
        <Button className="bg-[#022dbb] md:px-4 cursor-pointer">
          <Link href="/" className='inline-flex gap-1 items-center'><LayoutList />Details</Link>
        </Button>
        <Button className="bg-[#022dbb] md:px-4 cursor-pointer">
          <Link href="/" className='inline-flex gap-1 items-center'><ArrowUpRight />Book Now</Link>
        </Button>
        </div>
      </div>
    </div>
  );
}
