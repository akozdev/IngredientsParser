const path = require('path');

const config = require('./config');
const loadRecipes = require('./utils/loadRecipes');
const saveRecipes = require('./utils/saveRecipes');
const flattenRecipe = require('./layers/flattenRecipe');
const roundIngredients = require('./layers/roundIngredients');
const parseIngredients = require('./layers/parseIngredients');
const removeNonsense = require('./layers/removeNonsense');
const pluraliseUnits = require('./layers/pluraliseUnits');

// const recipes = loadRecipes(config.RECIPES_PATH);
//
// const newRecipes = recipes.map(el => {
//   try {
//     let recipe = flattenRecipe(el);
//     recipe = parseIngredients(recipe);
//
//     return recipe;
//   } catch (e) {
//     return null;
//   }
// });
//
// newRecipes.forEach(el => console.log(el));



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
      "1 pint Grape Tomatoes",
      "2 cloves Garlic, Minced",
      "8 ounces, weight Fresh Mozzarella Cheese, Sliced Very Thin",
      "1/2 cup Freshly Grated Parmesan Cheese",
      "Extra Virgin Olive Oil For Drizzling",
      "Freshly Ground Black Pepper"
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

console.log(recipe);



// saveRecipes(path.resolve(__dirname, 'data', 'test'), recipes);