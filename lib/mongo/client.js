// import { MongoClient } from 'mongodb';

// const URI = process.env.MONGO_URI;
// const options = {};

// if (!URI) {
//   throw new Error('Please add your URI to .env.local');
// }

// let client;
// let clientPromise;

// try {
//   client = new MongoClient(URI, options);

//   if (process.env.NODE_ENV !== 'production') {
//     if (!global._mongoClientPromise) {
//       global._mongoClientPromise = client.connect();
//     }
//     clientPromise = global._mongoClientPromise;
//   } else {
//     clientPromise = client.connect();
//   }
// } catch (error) {
//   console.error('Error initializing MongoDB client:', error);
//   throw new Error('Failed to initialize MongoDB client.');
// }

// export default clientPromise;
import { MongoClient } from 'mongodb';

const URI = process.env.MONGO_URI;
const options = {};

if (!URI) {
  throw new Error('Please add your URI to .env.local');
}

let client;
let clientPromise;

try {
  client = new MongoClient(URI, options);

  if (process.env.NODE_ENV !== 'production') {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = client.connect();
  }
} catch (error) {
  console.error('Error initializing MongoDB client:', error);
  clientPromise = Promise.reject(error); // Reject the promise with the error
}

export default clientPromise;
