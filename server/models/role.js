'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuid4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuid4
    },
    role_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};