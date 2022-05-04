const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
const main = async () => {
  try {
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log("Connection has been established secessfully");
  } catch (error) {
    console.log(error);
  }
};
main();

module.exports = {
  sequelize,
};
