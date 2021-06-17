// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    //ID int, no null,primary key, auto - inc
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //product-name, string no nulls,
    producte_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //price decimal, no nulls, validates that value === decimal
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isDecimal: true,
      }
    },
    //stock integer, no nulls, default at value of 10, validates its number
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      }
    },
    //category ID integer, references the Category.js model ID
    category_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
