"use strict";

const Book = require("../models/book.model");

module.exports = {
  list: async (req, res) => {
    const data = await Book.findAndCountAll();
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  create: async (req, res) => {
    const data = await Book.create(req.body);
    res.status(201).send({
      error: false,
      result: data.dataValues,
    });
  },
  read: async (req, res) => {
    const data = await Book.findByPk(req.params.id);
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await Book.update(req.body, { where: { id: req.params.id } });
    res.status(202).send({
      error: false,
      message: "Updated",
      body: req.body,
      result: data,
    });
  },
  delete: async (req, res) => {
    const data = await Book.destroy({ where: { id: req.params.id } });
    if ( data > 0){
        res.sendStatus(204)
    }else{
       res.status(404).send({
        error: true,
        result:data
       }) 
    }
  },
};
