// import models
const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
const IngredientRecipe = require('./IngredientRecipe');
const User = require('./User');

// ingredient belongsTo recipe
Ingredient.belongsToMany(Recipe, { 
  through: IngredientRecipe, 
foreignKey: "ingredient_id",

});
// recipe has many ingredients
Recipe.belongsToMany(Ingredient, { 
  through: IngredientRecipe, 
foreignKey: "recipe_id",

});


// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Recipe,
  Ingredient,
  IngredientRecipe,
  User,
};