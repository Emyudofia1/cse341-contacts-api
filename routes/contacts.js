const express = require("express");
const router = express.Router();
const { getDb } = require("../db/connect");
const { ObjectId } = require("mongodb");

// GET all contacts
router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const contacts = await db.collection("contacts").find().toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one contact
router.get("/:id", async (req, res) => {
  try {
    const db = getDb();
    const contact = await db
      .collection("contacts")
      .findOne({ _id: new ObjectId(req.params.id) });

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;