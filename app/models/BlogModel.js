import { Sequelize } from "sequelize";
import db from "../config/Mysql.js";

const { DataTypes } = Sequelize;

const Blog = db.define(
  "blogs",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    body: DataTypes.STRING,
    category: DataTypes.STRING,
    author: DataTypes.STRING,
    slug: DataTypes.STRING,
    publishedAt: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    urlThumbnail: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Blog;

(async () => {
  await db.sync();
})();
