'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuid4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.role, {
        through: 'role_users',
        foreignKey: 'user_id',
        otherKey: 'role_id'
      })
      user.belongsToMany(models.student, {
        through: 'student_users',
        foreignKey: 'user_id',
        otherKey: 'student_id'
      })
    }
  }
  user.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuid4
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};