import Image from "next/image";

export default function SearchCard({ item }) {
  console.log(item);
  
  const {
    photo,
    name,
    department,
    age,
    phone,
    email,
    disease,
    date,
    time,
    patientName,
    doctorName,
    availableStatus,
    workExperienceYears

  } = item;

  return (
    <div className="p-4 w-[550px] flex flex-row gap-6 rounded-lg shadow-lg border bg-white dark:bg-gray-800">
      {/* Image */}
      <div className="flex justify-center items-center w-[30%]">
        <Image
          alt={name || "Profile"}
          width={100}
          height={100}
          src={photo || "/default-profile.png"}
          unoptimized={true}
          className="w-full h-auto object-cover bg-slate-50 dark:bg-gray-950 rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="w-[70%]">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-4">{name || "No Name"}</h3>

        {/* Doctor Info */}
        {department && (
          <>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Department:</strong> {department}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Age:</strong> {age || "N/A"}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Status:</strong> {availableStatus || "N/A"}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Experience:</strong> {workExperienceYears || "N/A"}
            </p>
          </>
        )}

        {/* Patient Info */}
        {disease && (
          <>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Age:</strong> {age || "N/A"}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Disease:</strong> {disease}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Phone:</strong> {phone || "N/A"}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Email:</strong> {email || "N/A"}
            </p>
          </>
        )}

        {/* Appointment Info */}
        {(date || time || patientName || doctorName) && (
          <>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Date:</strong> {date || "N/A"}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Time:</strong> {time || "N/A"}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Patient:</strong> {patientName || "N/A"}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Doctor:</strong> {doctorName || "N/A"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
