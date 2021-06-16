const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    //id int no nulls, primary key and auto inc
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    poduct_id : {
      type: DataTypes.INTEGER,
      //references product model id
    },
    //tag_id is an int, references the TAG js model id
    tag_id: {
      type: DataTypes.INTEGER,
      //referemces tag models id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
