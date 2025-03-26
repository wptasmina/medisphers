
import { collectionName, connectToDatabase } from '@/lib/dbConnect';
import ServiceCard from './ServiceCard'


export default async function Service() {


  const { db } = await connectToDatabase();
  const servicesCollection = db.collection(collectionName.servicesCollection);

  const doctors = await servicesCollection
    .find({})
    .sort({ workExperienceYears: -1 }) // Sort by highest workExperience
    .limit(6)
    .toArray();

  // console.log(doctors);

  return (
    <>
      <div className='md:py-6 dark:bg-gray-950 py-6'>
        <div className='w-11/12 mx-auto '>
          <h2 className='md:text-5xl text-4xl text-center font-extrabold mt-4'>Top <span className='text-[#022dbb]'>Doctor's</span></h2>

          <p className="text-md text-center pt-4 pb-4 sm:pb-0 text-gray-500 dark:text-gray-300 font-medium ">
            Top Doctors are expert physicians known for exceptional care and medical excellence.🏆
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:my-10">
            {
              doctors.map((item, idx) => (<ServiceCard key={idx} item={item} />))
            }
          </div>
        </div>
      </div>
    </>
  )
}
