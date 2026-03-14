const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

// Routes only define paths — NO logic here
router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getSingle);

module.exports = router;