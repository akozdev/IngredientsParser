const path = require('path');

const config = require('./config');
const loadRecipes = require('./utils/loadRecipes');
const saveRecipes = require('./utils/saveRecipes');
const flattenRecipe = require('./layers/flattenRecipe');
const roundIngredients = require('./layers/roundIngredients');
const parseIngredients = require('./layers/parseIngredients');
const removeNonsense = require('./layers/removeNonsense');
const pluraliseUnits = require('./layers/pluraliseUnits');
const joinIngredients = require('./layers/joinIngredients');
const removeDoubleUnits = require('./layers/removeDoubleUnits');

// const recipes = loadRecipes(config.RECIPES_PATH);
//
// const newRecipes = recipes.map(el => {
//   try {
//     let recipe = flattenRecipe(el);
//     recipe = parseIngredients(recipe);
//     recipe = roundIngredients(recipe);
//     recipe = removeNonsense(recipe);
//     recipe = pluraliseUnits(recipe);
//     recipe = joinIngredients(recipe);
//     recipe =
//     return recipe;
//   } catch (e) {
//     return null;
//   }
// });
//
// var filteredRecipes = newRecipes.filter(function (el) {
//   return el != null;
// });
//
// saveRecipes(path.resolve(__dirname, 'data', 'test'), filteredRecipes);

// TESTING
let recipe = {
  "recipe": {
    "publisher": "The Pioneer Woman",
    "ingredients": [
      "FOR THE CRUST (MAKES TWO CRUSTS):",
      "1 teaspoon Active Dry Or Instant Yeast",
      "4 cups All-purpose Flour",
      "1 teaspoon Kosher Salt",
      "1/3 cup Extra Virgin Olive Oil",
      "_____",
      "FOR THE PIZZA:",
      "1 whole Large Eggplant (or Two Medium Eggplants)",
      "Kosher Salt, For Sprinkling",
      "2 pint Grape Tomatoes",
      "2 cloves Garlic, Minced",
      "8 ounces, weight Fresh Mozzarella Cheese, Sliced Very Thin",
      "1/2 cup Freshly Grated Parmesan Cheese",
      "Extra Virgin Olive Oil For Drizzling",
      "Freshly Ground Black Pepper",
      "300ml fresh milk",
      "500g/1lb 2oz honeydew, Galia or cantaloupe melon chunks (or a mixture), plus some melon balls to serve (optional)",
      "zest and juice 2 limes",
      "100ml/ 3 fl oz cloudy apple juice",
      "200-250ml/7-9fl oz chilled white wine",
      "chilled lemonade , crushed ice and a few bamboo skewers (optional), to serve"
    ],
    "source_url": "http://thepioneerwoman.com/cooking/2010/02/my-favorite-pizza/",
    "recipe_id": "47161",
    "image_url": "http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg",
    "social_rank": 99.99999689667648,
    "publisher_url": "http://thepioneerwoman.com",
    "title": "PW’s Favorite Pizza"
  }
};

recipe = flattenRecipe(recipe);
recipe = parseIngredients(recipe);
recipe = roundIngredients(recipe);
recipe = removeNonsense(recipe);
recipe = pluraliseUnits(recipe);
recipe = joinIngredients(recipe);
recipe = removeDoubleUnits(recipe);

// console.log(recipe);