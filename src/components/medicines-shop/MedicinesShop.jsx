
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"

export default function MedicinesShop() {
  return (
    <div>
        <Card className="w-auto p-4">
        <Image 
        src="/assets/med-1.jpg"
        width={400}
        height={500}
        className="w-full rounded-t-lg"
        />
      <CardHeader>
        <CardTitle className="text-center">Create project</CardTitle>
        <CardDescription className="text-center text-green-500"><span  className="line-through">10% </span> <span className="text-xl font-bold">12 GO</span></CardDescription>
      </CardHeader>
    </Card>
    </div>
  )
}
