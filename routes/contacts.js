const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get contact by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create contact
 */

/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update contact
 */

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete contact
 */

router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getSingle);
router.post("/", contactsController.createContact);
router.put("/:id", contactsController.updateContact);
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
