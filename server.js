const { sequelize } = require("./src/data/db");
const app = require("./index");

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log("Connection has been established secessfully");
    app.listen(3000);
    console.log("Server is running at port 3000");
  } catch (error) {
    console.log(error);
  }
};

main();
