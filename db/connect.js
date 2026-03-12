const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

let client;
let db;

const initDb = async (callback) => {
  if (db) return callback(null, db);

  try {
    client = new MongoClient(process.env.MONGODB_URI, {
      tls: true,
    });

    await client.connect();

    db = client.db("contacts"); // explicitly select database

    console.log("Connected to MongoDB Atlas!");
    callback(null, db);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    callback(err);
  }
};

const getDb = () => db;

module.exports = { initDb, getDb };