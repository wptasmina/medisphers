import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function ServiceCard({ item }) {
  const { photo, name, year, workExperienceYears, department, about} = item;
  console.log(item);
  


  return (
    <Link href="/details">
      <div className="p-4 bg-white dark:bg-gray-950 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all ease-in-out border">
        <Image
           alt={name} 
           width={300} 
           height={300}
          src={photo}
          unoptimized={true}
          className="w-full h-56 object-cover object-right-top bg-slate-50 dark:bg-gray-950 rounded-t-xl"
        />

        <div className="bg-white dark:bg-gray-950 md:px-4 px-2 py-6">
          <div className="flex justify-between items-center gap-4 ">
            <p className="bg-blue-50 rounded-full px-4 py-1 text-sm font-normal text-blue-600 shadow-2xl">
              {department}
            </p>
            <p className="bg-blue-50 rounded-full px-4 py-1 text-sm font-normal text-blue-600 shadow-2xl">
              Year: {workExperienceYears}
            </p>
          </div>
          <h3 className="mt-2 text-lg text-gray-900 dark:text-white font-bold">{name}</h3>
          <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-white">
            {about}
          </p>
        </div>
      </div>
    </Link>
  );
}