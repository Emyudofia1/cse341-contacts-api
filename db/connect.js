// db/connect.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config(); // Load .env locally

let client;
let db;

const initDb = async (callback) => {
  if (db) return callback(null, db);

  try {
    client = new MongoClient(process.env.MONGODB_URI, {
      tls: true, // required for Atlas
    });

    await client.connect();
    db = client.db(); // default DB from URI
    console.log("Connected to MongoDB Atlas!");
    callback(null, db);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    callback(err);
  }
};

const getDb = () => db;

module.exports = { initDb, getDb };