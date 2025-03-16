import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ item }) {
  const { img, name, year, availability, datetime, desc } = item;

  return (
    <div className=" overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <img
        alt="image"
        src={img}
        className="h-56 w-full object-cover  object-right-top"
      />

      <div className="bg-white p-4 sm:p-6">
        <div className="flex justify-between items-center ">
          <div>
            <time dateTime={datetime} className="block text-xs text-gray-500">
              {datetime}
            </time>
          </div>
          <p className="text-gray-900 font-medium">{availability}</p>
        </div>

        <div className="flex justify-between items-center ">
          <h3 className="mt-0.5 text-lg text-gray-900 font-bold">{name}</h3>
          <p>Year: {year}</p>
        </div>

        <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500">
          {desc}
        </p>
        <Link href={'/doctor'}>
          <Button>Details</Button>
        </Link>
      </div>
    </div>
  );
}
