const mongodb = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

let database;

const initDb = async (callback) => {
  if (database) return callback(null, database);

  try {
    const client = new mongodb.MongoClient(process.env.MONGODB_URI, {
      tls: true
    });

    await client.connect();
    database = client;
    console.log("Connected to MongoDB Atlas!");
    callback(null, database);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    callback(err);
  }
};

const getDb = () => database.db();

module.exports = { initDb, getDb };