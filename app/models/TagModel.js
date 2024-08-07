import { Sequelize } from "sequelize";
import db from "../config/Mysql.js";

const { DataTypes } = Sequelize;

const Tag = db.define(
  "tags",
  {
    tag: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Tag;

(async () => {
  await db.sync();
})();
