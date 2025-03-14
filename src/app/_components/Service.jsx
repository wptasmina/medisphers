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
    <h2 className='text-4xl text-center font-bold my-8'>Top Dortors</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 w-11/12 mx-auto'>
        {
          service.map((item, idx) => (<ServiceCard key={idx.id} item={item}  />))   
        }
    </div>
     </>
  )
}
