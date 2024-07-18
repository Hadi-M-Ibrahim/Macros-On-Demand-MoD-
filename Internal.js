function MenuItem(name, brand, calories, protein, carbohydrates, fat) {
  this.name = name;
  this.brand = brand;
  this.calories = calories;
  this.protein = protein;
  this.carbohydrates = carbohydrates;
  this.fat = fat;
}

function IdealMenuItem(name, brand, calories, protein, carbohydrates, fat) {
  MenuItem.call(this, name, brand, calories, protein, carbohydrates, fat);
}

MenuItem.prototype = Object.create(IdealMenuItem.prototype);
IdealMenuItem.prototype.constructor = IdealMenuItem;

IdealMenuItem.prototype.FindIdeaItem = function () {
  console.log();
};
