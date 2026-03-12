const mongodb = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

let database;

const initDb = (callback) => {
  if (database) {
    console.log("Database already initialized");
    return callback(null, database);
  }

  mongodb.MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  return database.db();
};

module.exports = { initDb, getDb };