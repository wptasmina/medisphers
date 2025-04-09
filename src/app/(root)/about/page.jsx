import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaUserMd, FaHeartbeat, FaPills, FaStore, FaBullseye, FaCheckCircle } from 'react-icons/fa';

export default function About() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto pt-20">
      <Head>
        <title>About Us - MediSphere</title>
        <meta name="description" content="Learn more about MediSphere, the ultimate medical management application." />
      </Head>

      {/* Intro Section */}
      <section className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center py-12">
        <Image
          src="/about-banner.jpg"
          width={600}
          height={600}
          className="rounded-2xl w-full h-full object-cover shadow"
          alt="Doctor image"
        />

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#022dbb] dark:text-white">
            🩺 About MediSphere Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            MediSphere is a comprehensive AI-driven hospital management system that streamlines patient records, optimizes clinical operations, and empowers healthcare providers with smart decision-making tools.
          </p>

          {/* Specialty Cards */}
          <div className="py-8 grid grid-cols-2 gap-6 dark:text-gray-800">
            {[
              {
                icon: <FaUserMd className="text-4xl text-[#022dbb]" />,
                label: "FAMILY MEDICINE",
                bg: "hover:bg-[#022dbb]",
              },
              {
                icon: <FaHeartbeat className="text-4xl text-red-500" />,
                label: "CARDIOLOGY & DIABETES",
                bg: "hover:bg-red-500",
              },
              {
                icon: <FaPills className="text-4xl text-orange-500" />,
                label: "HEALTH & WELLNESS",
                bg: "hover:bg-orange-500",
              },
              {
                icon: <FaStore className="text-4xl text-sky-500" />,
                label: "MEDISPHERE PHARMACY",
                bg: "hover:bg-sky-500",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all ${card.bg}`}
              >
                <div className="rounded-full border-2 border-gray-200 bg-white p-4 mb-4">
                  {card.icon}
                </div>
                <h3 className="text-center text-sm font-semibold tracking-wide text-black dark:text-white">
                  {card.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center text-[#022dbb] mb-8">Core Services Offered</h2>
        <ul className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 text-gray-600 dark:text-gray-300">
          {[
            { icon: "👨‍⚕️", title: "AI-Powered Doctor Matching", desc: "Smart patient-doctor matching based on symptoms and availability." },
            { icon: "🧠", title: "Smart Symptom Checker", desc: "AI-generated preliminary diagnosis based on symptoms." },
            { icon: "📅", title: "Intelligent Scheduling", desc: "Real-time availability and appointment tracking." },
            { icon: "🗂️", title: "EHR System", desc: "Centralized digital medical records accessible anytime." },
            { icon: "💊", title: "Smart Prescriptions", desc: "AI-driven accurate and efficient prescription generation." },
            { icon: "🧾", title: "Billing Automation", desc: "Integrated billing and insurance management system." },
            { icon: "📊", title: "Analytics Dashboard", desc: "Visual insights into hospital and patient metrics." },
            { icon: "🔔", title: "Notifications", desc: "Follow-up reminders, test alerts, and more." },
            { icon: "📞", title: "Telemedicine", desc: "Encrypted video calls and remote consultations." },
          ].map((item, i) => (
            <li key={i} className="bg-base-200 dark:bg-gray-800 p-5 rounded-xl shadow-md">
              <span className="text-3xl">{item.icon}</span>
              <h4 className="text-lg font-semibold text-[#022dbb] mt-2">{item.title}</h4>
              <p className="mt-1 text-sm">{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Mission & Value Section */}
      <section className="grid md:grid-cols-2 gap-6 py-12">
        {/* Mission Card */}
        <div className="transition-transform hover:-translate-y-1 hover:shadow-xl bg-base-200 dark:bg-gray-900 border-l-4 border-[#022dbb] p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#022dbb] dark:text-gray-300">
            <FaBullseye /> Our Mission
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Our mission is to revolutionize healthcare management by providing a seamless, efficient, and secure platform for hospitals, clinics, and individual practitioners.
          </p>
        </div>

        {/* Why Choose Card */}
        <div className="transition-transform hover:-translate-y-1 hover:shadow-xl bg-base-200 dark:bg-gray-900 border-l-4 border-[#022dbb] p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#022dbb] dark:text-gray-300">
            <FaCheckCircle /> Why Choose MediSphere?
          </h2>
          <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Secure cloud-based medical record management</li>
            <li>Efficient appointment scheduling & patient tracking</li>
            <li>User-friendly interface with real-time updates</li>
            <li>HIPAA-compliant data security</li>
          </ul>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white dark:bg-gray-950 py-12">
        <h2 className="text-3xl font-bold text-center text-[#022dbb] mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Cardiology", "Pediatrics", "Orthopedics", "Neurology", "Dermatology", "General Surgery"].map((title, i) => (
            <div key={i} className="p-6 bg-white dark:bg-gray-900 shadow rounded-xl">
              <h3 className="text-xl dark:text-gray-200 font-semibold text-[#022dbb]">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {title === "Cardiology"
                  ? "Expert heart care and surgery."
                  : title === "Pediatrics"
                  ? "Comprehensive child healthcare."
                  : title === "Orthopedics"
                  ? "Bone & joint treatments."
                  : title === "Neurology"
                  ? "Brain and nerve health."
                  : title === "Dermatology"
                  ? "Skin care and treatments."
                  : "Minimally invasive procedures."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <div className="text-center pb-10">
        <Link href="/contact">
          <Button className="bg-[#022dbb] text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition cursor-pointer">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
}
