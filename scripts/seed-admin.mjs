import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("Missing MONGODB_URI");
  process.exit(1);
}

const email = process.env.ADMIN_EMAIL ?? "admin@Physiofitness.in";
const password = process.env.ADMIN_PASSWORD ?? "admin123";

const client = new MongoClient(uri);

async function seed() {
  try {
    await client.connect();
    const db = client.db("physiofitness");
    const collection = db.collection("admins");

    const found = await collection.findOne({ email });
    if (found) {
      console.log(`Admin already exists for ${email}. Skipping.`);
    } else {
      await collection.insertOne({
        email,
        password,
        createdAt: new Date().toISOString(),
      });
      console.log(`Seeded admin: ${email} (password: ${password})`);
    }
  } catch (err) {
    console.error("Seeding admin failed:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

seed();
