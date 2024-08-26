import { Sequelize } from "sequelize";
const db = new Sequelize("nodejs", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  await db.authenticate()
  console.log('Database connected...');
} catch (error) {
  console.log(error);
}

export default db;
