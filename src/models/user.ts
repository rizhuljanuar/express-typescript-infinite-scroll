import { DataTypes } from "sequelize";
import db from "../config/Database";

const user = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default user;

(async () => {
  db.sync();
})();
