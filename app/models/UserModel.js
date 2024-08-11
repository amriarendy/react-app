import { Sequelize } from "sequelize";
import db from "../config/Mysql.js";

const { DataTypes } = Sequelize;

const User = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.STRING,
    gender: DataTypes.STRING,
    photo: DataTypes.STRING,
    urlPhoto: DataTypes.STRING,
    phone: DataTypes.STRING,
    biography: DataTypes.STRING,
    status: DataTypes.STRING,
    position: DataTypes.STRING,
    country: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default User;

(async () => {
  await db.sync();
})();
