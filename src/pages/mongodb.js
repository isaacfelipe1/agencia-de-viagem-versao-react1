import { MongoClient } from 'mongodb';

const uri = 'localhost:27017'; 
let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db('agencia'); 

  cachedClient = { client, db };

  return cachedClient;
}
