const { Sequelize } = require("sequelize");
const pg = require("pg");
const sequelize = new Sequelize(process.env.DB, {
  dialectModule: pg,
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false,
  //   },
  // },
});
const main = async () => {
  try {
    await sequelize.sync({ force: false });
    await sequelize.authenticate();
    console.log("Connection has been established secessfully");
  } catch (error) {
    console.log(error);
  }
};
main();

module.exports = sequelize;
