import { Sequelize } from "sequelize";
import db from "../config/Mysql.js";

const { DataTypes } = Sequelize;

const Category = db.define(
  "categories",
  {
    category: DataTypes.STRING,
    slug: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Category;

(async () => {
  await db.sync();
})();
