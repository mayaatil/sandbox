const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class IngredientRecipe extends Model {}

IngredientRecipe.init(
  {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  
  ingredient_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "ingredient",
      key: "id"
    },
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "recipe",
      key: "id"
    }
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingredient_recipe',
  }
);

module.exports = IngredientRecipe;