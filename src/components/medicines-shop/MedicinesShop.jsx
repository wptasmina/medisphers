// This is a SERVER COMPONENT — don't use "use client"
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {medicines.map((med, index) => (
          <Link href={`/shop/midicine-details`} key={index}>
            <Card className="w-auto md:p-4 p-2">
              <Image
                src={med.image}
                width={400}
                height={500}
                alt={med.name}
                className="w-full md:h-40 h-24 rounded-t-lg object-cover"
              />
              <CardHeader>
                <CardTitle className="text-center">{med.name}</CardTitle>
                <CardDescription className="text-center text-green-500">
                  <span className="line-through">{med.discount}</span>{" "}
                  <span className="text-xl font-bold">{med.price}</span>
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
