import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="w-11/12 mx-auto">
      <Head>
        <title>About Us - MediSphere</title>
        <meta name="description" content="Learn more about MediSphere, the ultimate medical management application." />
      </Head>
      <div className="min-h-screen flex flex-col items-center px-6 py-12">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-primary">About MediSphere</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-white">
            MediSphere is a modern medical management application designed to simplify healthcare administration, streamline patient records, and enhance medical workflows.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="p-6 bg-base-200 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-700">Our Mission</h2>
            <p className="mt-2 text-gray-500">
              Our mission is to revolutionize healthcare management by providing a seamless, efficient, and secure platform for hospitals, clinics, and individual practitioners.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-xl shadow-lg">
            <h2 className="text-2xl text-blue-700 font-semibold">Why Choose MediSphere?</h2>
            <ul className="mt-2 text-gray-500 list-disc list-inside">
              <li>Secure cloud-based medical record management</li>
              <li>Efficient appointment scheduling & patient tracking</li>
              <li>User-friendly interface with real-time updates</li>
              <li>HIPAA-compliant data security</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}