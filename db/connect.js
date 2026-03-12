const mongodb = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

let database;

const initDb = (callback) => {
  if (database) {
    console.log("Database already initialized");
    return callback(null, database);
  }

  const client = new mongodb.MongoClient(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true, // Ensures secure connection
  });

  client.connect()
    .then(() => {
      database = client;
      console.log("Connected to MongoDB Atlas!");
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => database.db(); // returns the default database

module.exports = { initDb, getDb };