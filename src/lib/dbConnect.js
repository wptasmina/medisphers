import { MongoClient } from "mongodb";



const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI)console.log("Missing MONGODB_URI")
if (!MONGODB_DB)console.log("Missing MONGODB_DB")

let cachedClient = null;
let cachedDb = null;

export const collectionName = {
  servicesCollection: "doctors"
}

export async function connectToDatabase() {
  if (cachedClient && cachedDb) return { client: cachedClient, db: cachedDb };

  // const client = await MongoClient.connect(MONGODB_URI);
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB);


  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
