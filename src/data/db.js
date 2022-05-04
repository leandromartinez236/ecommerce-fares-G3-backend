const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://lqeogyfbxnuqal:ed055f8e939237fe697f056acb5c38831293ed4a6b7cacdd2ab3ecd5d7566980@ec2-52-54-212-232.compute-1.amazonaws.com:5432/d5qmtb3pfknpb0"
);

module.exports = {
  sequelize,
};
