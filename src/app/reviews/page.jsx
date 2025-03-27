import { connectToDatabase } from '@/lib/dbConnect';
import ReviewsClient from '../_components/ReviewsClient';


export default async function Reviews() {
  const { db } = await connectToDatabase();
  const reviewsCollection = db.collection('reviews');
  const reviews = await reviewsCollection.find({}).toArray();

  return <ReviewsClient reviews={reviews} />;
}
