import { connectToDatabase } from '@/lib/dbConnect'; // MongoDB Connection
import ReviewsClient from './../_components/ReviewsClient';

export default async function Reviews() {
  const { db } = await connectToDatabase();
  const reviewsCollection = db.collection('reviews');
  const reviews = await reviewsCollection.find({}).toArray(); 

 
  const formattedReviews = JSON.parse(JSON.stringify(reviews));

  return <ReviewsClient reviews={formattedReviews} />;
}
