import "server-only";
import type { Db } from "mongodb";
import mongoose from "mongoose";

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cache = global.mongooseCache ?? {
  connection: null,
  promise: null,
};

global.mongooseCache = cache;

async function dbConnect(): Promise<typeof mongoose> {
  if (cache.connection) {
    return cache.connection;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  cache.promise ??= mongoose.connect(uri);
  cache.connection = await cache.promise;

  return cache.connection;
}

export default dbConnect;

/**
 * Returns the native MongoDB database from the shared Mongoose connection.
 * Use this for collections that do not have a Mongoose model.
 */
export async function getDb(): Promise<Db> {
  const connection = await dbConnect();
  const db = connection.connection.db;

  if (!db) {
    throw new Error("MongoDB connection is not available");
  }

  return db;
}
