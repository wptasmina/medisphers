"use client"

import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

export default function Service() {

      const [service, setService] = useState([])

      useEffect(()=>{
        fetch("/service.json")
        .then(res=>res.json())
        .then(data=> setService(data))
      },[])
      
  return (
     <>
    <div className=' w-11/12 mx-auto md:px-4 px-3'>
      <h2 className='md:text-5xl text-4xl text-center font-extrabold my-8'>Top <span className='text-[#022dbb] '>Dortor's</span></h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {
          service.map((item, idx) => (<ServiceCard key={idx} item={item}  />))   
        }
    </div>
      </div>
     </>
  )
}
