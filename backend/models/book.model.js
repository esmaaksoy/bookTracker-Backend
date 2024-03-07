"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite:./db.sqlite3");

module.exports = sequelize.define("books", {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  ISBN: { type: DataTypes.INTEGER },
  genre: { type: DataTypes.STRING },
  publicationYear: { type: DataTypes.INTEGER },
  image: { type: DataTypes.STRING, allowNull: false },
});

sequelize.authenticate().then(()=>console.log("DB Connected")).catch(()=> console.log("DB Not Connected"))