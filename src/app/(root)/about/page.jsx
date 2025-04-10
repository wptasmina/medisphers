import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";
import { FaUserMd, FaHeartbeat, FaPills, FaStore } from 'react-icons/fa';

export default function About() {
  return (
    <div className="w-11/12 mx-auto pt-16">
      <Head>
        <title>About Us - MediSphere</title>
        <meta name="description" content="Learn more about MediSphere, the ultimate medical management application." />
      </Head>
      <div className="min-h-screen flex flex-col items-center px-10 py-12 gap-4">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-primary">About MediSphere</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-white">
            MediSphere is a modern medical management application designed to simplify healthcare administration, streamline patient records, and enhance medical workflows.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center gap-2">
            <div className="p-6 bg-base-200 dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-700 dark:text-gray-300">Our Mission</h2>
              <p className="mt-2 text-gray-500">
                Our mission is to revolutionize healthcare management by providing a seamless, efficient, and secure platform for hospitals, clinics, and individual practitioners.
              </p>
            </div>

            <div className="p-6 bg-base-200 dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-2xl text-blue-700 font-semibold dark:text-gray-300">Why Choose MediSphere?</h2>
              <ul className="mt-2 text-gray-500 list-disc list-inside">
                <li>Secure cloud-based medical record management</li>
                <li>Efficient appointment scheduling & patient tracking</li>
                <li>User-friendly interface with real-time updates</li>
                <li>HIPAA-compliant data security</li>
              </ul>
            </div>
          </div>
          <div className="border rounded-2xl">
            <img
              src="/banner1.png"
              width={600}
              height={600}
              className="rounded h-full w-full"
              alt="Doctor image"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6 mx-auto">
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-fuchsia-500 transition-all">
            <div className="rounded-full border-2 border-gray-200 bg-white p-4 mb-4">
              <FaUserMd className="text-4xl text-fuchsia-500" />
            </div>
            <h3 className="text-center text-sm font-semibold tracking-wide text-black">
              FAMILY MEDICINE
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-red-500 transition-all">
            <div className="rounded-full border-2 border-gray-200 bg-white p-4 mb-4">
              <FaHeartbeat className="text-4xl text-red-500" />
            </div>
            <h3 className="text-center text-sm font-semibold tracking-wide text-black">
              CARDIOLOGY & DIABETES
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-orange-500 transition-all">
            <div className="rounded-full border-2 border-gray-200 bg-white p-4 mb-4">
              <FaPills className="text-4xl text-orange-500" />
            </div>
            <h3 className="text-center text-sm font-semibold tracking-wide text-black">
              HEALTH & WELLNESS
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl hover:bg-sky-500 transition-all">
            <div className="rounded-full border-2 border-gray-200 bg-white p-4 mb-4">
              <FaStore className="text-4xl text-sky-500" />
            </div>
            <h3 className="text-center text-sm font-semibold tracking-wide text-black">
              MEDISPHERE PHARMACY
            </h3>
          </div>
        </div>
        <div>
          <Link href="/contact" className="bg-[#022dbb]"><Button className="bg-[#022dbb]">Get in Touch</Button></Link>
        </div>
      </div>
    </div>

  );
}