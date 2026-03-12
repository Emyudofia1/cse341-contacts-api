const express = require("express");
const mongodb = require("./db/connect");
const contactsRouter = require("./routes/contacts");

const app = express();

// Render sets PORT automatically
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use("/contacts", contactsRouter);

// Connect to MongoDB and start server
mongodb.initDb((err) => {
  if (err) {
    console.error("Failed to connect to MongoDB", err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});