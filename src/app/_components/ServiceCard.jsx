
import Image from "next/image";
import Link from "next/link";



export default function ServiceCard({ item }) {
  const { _id, photo, name, year, workExperienceYears, department, about } = item;

  return (
    <Link href={`/doctors/${_id}`}>
      <div className="p-4 bg-white dark:bg-gray-900 overflow-hidden rounded-lg hover:shadow-xl border dark:border-gray-600 flex flex-col h-full">
        <div className="w-full sm:aspect-[4/4] aspect-[5/3] overflow-hidden">
          <Image
            alt={name}
            width={300}
            height={300}
            src={photo}
            unoptimized={true}
            className="w-full h-full object-cover object-top bg-slate-50 dark:bg-gray-900 rounded-t-xl"
          />
        </div>

        <div className="pt-4 flex-grow flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center gap-4">
              <p className="bg-blue-50 rounded-full  border  border-blue-100 px-2 py-1 text-sm font-normal text-blue-600 shadow-2xl">
                {department}
              </p>
              <p className="bg-blue-50 rounded-full border  border-blue-100 px-2 py-1 text-sm font-normal text-blue-600 shadow-2xl">
                Year: {workExperienceYears}
              </p>
            </div>
            <h3 className="mt-2 text-lg text-gray-900 dark:text-white font-bold">{name}</h3>
            <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-300">
              {about}
            </p>
          </div>
        </div>
      </div>
    </Link>

  );
}