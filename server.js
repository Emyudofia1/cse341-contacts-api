// server.js
const express = require("express");
const app = express();
const { initDb } = require("./db/connect");
const contactsRoutes = require("./routes/contacts");

// Middleware to parse JSON
app.use(express.json());

// Initialize DB and start server
initDb((err, db) => {
  if (err) {
    console.error("Cannot start server without DB connection");
    process.exit(1); // stop app if DB fails
  }

  // Routes
  app.use("/contacts", contactsRoutes);

  // Dynamic port for Render, fallback to 3000 locally
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
});