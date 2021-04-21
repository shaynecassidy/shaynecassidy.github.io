var recipes = [];
var restaurants = [];

function addRecipe() {
  var nameInput = document.getElementsByName('recipeName')[0].value;
  var linkInput = document.getElementsByName('recipeLink')[0].value;
  var cuisinInput = document.getElementsByName('recipeCuisine')[0].value;
  var ratingInput = document.getElementsByName('recipeRating')[0].value;

  var rec = {
    name: nameInput,
    link: linkInput,
    cuisine: cuisineInput,
    rating: ratingInput,
  };

  recipes.push(rec);
}

function addRestaurant() {
  var nameInput = document.getElementsByName('restaurantName')[0].value;
  var linkInput = document.getElementsByName('restaurantLink')[0].value;
  var cuisinInput = document.getElementsByName('restaurantCuisine')[0].value;
  var ratingInput = document.getElementsByName('restaurantRating')[0].value;

  var res = {
    name: nameInput,
    link: linkInput,
    cuisine: cuisineInput,
    rating: ratingInput,
  };

  restaurants.push(res);
}
