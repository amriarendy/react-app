import { Sequelize } from "sequelize";
import db from "../config/Mysql.js";

const { DataTypes } = Sequelize;

const Auth = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    photo: DataTypes.STRING,
    urlPhoto: DataTypes.STRING,
    tokenRefresh: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Auth;

(async () => {
  await db.sync();
})();
