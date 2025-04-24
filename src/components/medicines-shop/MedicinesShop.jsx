
import { connectToDatabase, collectionName } from '@/lib/dbConnect';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


export default async function MedicinesShop() {

  const { db } = await connectToDatabase();
  const medicinesCollection = db.collection(collectionName.medicinesCollection);

  const medicines = await medicinesCollection.find({}).limit(20).toArray();

  return (
    <div className="w-11/12 mx-auto pt-6 pb-12">
    <h2 className="md:text-4xl text-2xl font-bold text-center mb-6">
      Explore <span className="text-[#022dbb]">Medicines</span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {medicines.map((med, index) => (
        <Link href={`/shop/details/${med._id}`} key={index}>
          <Card className="flex flex-col h-full lg:p-4 md:p-3 p-2 cursor-pointer">
            <div className="w-full aspect-[4/3] relative">
              <Image
                src={med?.image} 
                alt={med?.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            <CardHeader className="px-0">
              <CardTitle className="text-center text-sm md:text-base">
                {med.name}
              </CardTitle>
              <CardDescription className="text-center text-green-600 text-sm md:text-lg">
                <span className="line-through mr-2 text-sm">{med.discount}</span>
                <span className="font-bold">{med.price}</span>
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  </div>
  );
}
