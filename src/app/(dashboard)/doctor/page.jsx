
import Link from "next/link";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors`, {
    cache: "no-store",
  });

  const doctors = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-[#022dbb] mb-10">Welcome to MediSphere</h1>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Featured Doctors</h2>

      {doctors.length === 0 ? (
        <p className="text-red-500">No doctors found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.slice(0, 6).map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src={doctor.photo || "/default-avatar.png"}
                alt={doctor.name}
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#022dbb]">{doctor.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{doctor.speciality}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Department: {doctor.department}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Doctors link */}
      <Link
        href="/doctor/all-doctors"
        className="block mt-10 text-center text-[#022dbb] font-medium hover:underline"
      >
        View All Doctors →
      </Link>
    </div>
  );
}
