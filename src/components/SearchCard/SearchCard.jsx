import Image from "next/image";

export default function SearchCard({ item }) {
    const { photo, name, department, age, phone, email, disease } = item;

    return (
        <div className="p-4 border w-[550px] md:flex flex-cols gap-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
        <div className="flex justify-center items-center md:w-[30%] ">
            <Image
                alt={name} 
                width={30} 
                height={300}
                src={photo || "/default-profile.png"}
                unoptimized={true}
                className="w-full h-auto object-cover object-right-top bg-slate-50 dark:bg-gray-950 rounded-t-xl"
            />
            </div>
           <div className="w-[70%] ">
           <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-4">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300"><strong>Age:</strong> {age || "N/A"}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Phone:</strong> {phone || "N/A"}</p>
            <p className="text-gray-600 dark:text-gray-300"><strong>Email:</strong> {email || "N/A"}</p>
            <p className="text-gray-600 dark:text-gray-300 pb-4"><strong>Disease:</strong> {disease || "N/A"}</p>
           </div>
        </div>
    );
}
