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

<div className="flex items-center justify-center gap-6 p-4 rounded-lg shadow-lg bg-gray-100 dark:bg-gray-900">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <Image
          alt={name || "Profile"}
          width={100}
          height={100}
          src={photo || "/default-profile.png"}
          unoptimized={true}
          className="w-24 h-24 object-top object-cover bg-slate-50 dark:bg-gray-950 rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-start md:text-xl text-xs flex-grow  [16/9]">
        <h3 className="md:text-xl text-md font-bold text-gray-900 dark:text-white">{name || "No Name"}</h3>

        {/* Doctor Info */}
        {department && (
          <>
            <p className="text-gray-600  md:text-[16px] text-xs dark:text-gray-300">
              <strong>Department:</strong> {department}
            </p>
            <p className="text-gray-600 md:text-[16px] text-xs dark:text-gray-300">
              <strong>Age:</strong> {age || "N/A"}
            </p>
            <p className="text-gray-600 md:text-[16px] text-xs dark:text-gray-300">
              <strong>Status:</strong>{" "}
              <span className={availableStatus ? "text-green-600 font-semibold" : "text-red-500 font-semibold"}>
                {availableStatus ? "Available" : "Unavailable"}
              </span>
            </p>
            <p className="text-gray-600 md:text-[16px] text-xs dark:text-gray-300">
              <strong>Experience:</strong> {workExperienceYears || "N/A"} years
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
  )
}