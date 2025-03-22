
import { collectionName, connectToDatabase } from '@/lib/dbConnect';
import ServiceCard from './ServiceCard'


export default async function Service() {


  const { db } = await connectToDatabase();
  const servicesCollection = db.collection(collectionName.servicesCollection); // এখানে আপনার collection নাম দিন
       // ডাটাবেজ থেকে ডাটা ফেচ করুন
  const doctors = await servicesCollection.find({}).limit(8).toArray();
  // console.log(doctors);
  
      
  return (
     <>
    <div className=' w-11/12 mx-auto md:px-4 px-3'>
      <h2 className='md:text-5xl text-4xl text-center font-extrabold my-8'>Top <span className='text-[#022dbb] '>Doctor's</span></h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {
          doctors.map((item, idx) => (<ServiceCard key={idx} item={item}  />))   
        }
    </div>
      </div>
     </>
  )
}
