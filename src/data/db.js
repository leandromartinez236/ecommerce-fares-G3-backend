const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
  'ejemplo'
)

module.exports = {
  sequelize
}