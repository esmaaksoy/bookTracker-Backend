"use strict";

const Book = require('../controllers/book.controller')
const router = require("express").Router()

router.route('/').get(Book.list).post(Book.create)
router.route("/:id").get(Book.read).put(Book.update).patch(Book.update).delete(Book.delete)

module.exports = router