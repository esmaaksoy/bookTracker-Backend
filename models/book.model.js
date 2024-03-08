"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://default:bcPYpez0gF5u@ep-jolly-bread-a45fz81v.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require");

module.exports = sequelize.define("books", {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  ISBN: { type: DataTypes.INTEGER },
  genre: { type: DataTypes.STRING },
  publicationYear: { type: DataTypes.INTEGER },
  image: { type: DataTypes.STRING, allowNull: false },
});
// sequelize.sync()
sequelize.authenticate().then(()=>console.log("DB Connected")).catch(()=> console.log("DB Not Connected"))