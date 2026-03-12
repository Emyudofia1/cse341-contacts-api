const express = require("express");
const mongodb = require("./db/connect");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/contacts", require("./routes/contacts"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
});