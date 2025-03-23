
import { collectionName, connectToDatabase } from '@/lib/dbConnect';
import ServiceCard from './ServiceCard'


export default async function Service() {


  const { db } = await connectToDatabase();
  const servicesCollection = db.collection(collectionName.servicesCollection); 
       
  const doctors = await servicesCollection.find({}).limit(8).toArray();
  // console.log(doctors);
  
      
  return (
     <>
    <div className=' w-11/12 mx-auto px-2'>
      <h2 className='md:text-5xl text-4xl text-center font-extrabold my-8'>Top <span className='text-[#022dbb] '>Doctor's</span></h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
        {
          doctors.map((item, idx) => (<ServiceCard key={idx} item={item}  />))   
        }
    </div>
      </div>
     </>
  )
}
