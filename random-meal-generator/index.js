const triggerBtn = document.getElementById("trigger");
const mainEl = document.querySelector("main");

triggerBtn.addEventListener("click", generateRandomMeal);

function generateRandomMeal() {
  if (document.querySelector("section")) mainEl.removeChild(document.querySelector("section"));

  const request = new Request("https://www.themealdb.com/api/json/v1/1/random.php");
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(request, requestOptions)
  .then(response => response.json())
  .then(data => data.meals[0])
  .then(recipeData => createRecipe(recipeData))
  .catch(err => console.log(err));
}

function createRecipe(data) {
  console.log(data);

  const container = document.createElement("section");
  container.classList.add("main-container");

  const recipeName = document.createElement("h2");
  recipeName.innerText = data.strMeal
  container.appendChild(recipeName);

  const recipeTags = document.createElement("h3");
  recipeTags.innerText = data.strTags
  container.appendChild(recipeTags);

  const recipeImage = document.createElement("img");
  recipeImage.setAttribute("src", data.strMealThumb);
  recipeImage.setAttribute("alt", data.strMeal);
  container.appendChild(recipeImage);

  const recipeDescriptionContainer = document.createElement("div");
  recipeDescriptionContainer.classList.add("description-container");

  const ingredientsHeading = document.createElement("h2");
  ingredientsHeading.innerText = "Ingredients :";
  recipeDescriptionContainer.appendChild(ingredientsHeading);

  const instructionHeading = document.createElement("h2");
  instructionHeading.innerText = "Instruction :";
  recipeDescriptionContainer.appendChild(instructionHeading);

  const recipeIngredientsContainer = document.createElement("div");
  recipeIngredientsContainer.classList.add("ingredients-container");

  const recipeIngridients = document.createElement("ul");
  for (let i = 1; i <= 20; i++) {
    if (!data[`strIngredient${i}`].trim()) break;

    const ingredient = document.createElement("li");
    ingredient.innerText = data[`strIngredient${i}`];
    recipeIngridients.appendChild(ingredient);
  }
  recipeIngredientsContainer.appendChild(recipeIngridients);

  const recipeIngridientsMeasures = document.createElement("ul");
  for (let i = 1; i <= 20; i++) {
    if (!data[`strMeasure${i}`].trim()) break;

    const ingredient = document.createElement("li");
    ingredient.innerText = data[`strMeasure${i}`];
    recipeIngridientsMeasures.appendChild(ingredient)
  }
  recipeIngredientsContainer.appendChild(recipeIngridientsMeasures);

  recipeDescriptionContainer.appendChild(recipeIngredientsContainer);

  const recipeInstruction = document.createElement("p");
  recipeInstruction.classList.add("instruction");
  recipeInstruction.innerText = data.strInstructions;
  recipeDescriptionContainer.appendChild(recipeInstruction);
  container.appendChild(recipeDescriptionContainer);

  const youtubeHeader = document.createElement("h2");
  youtubeHeader.innerText = "Watch tutorial on youtube :";
  container.appendChild(youtubeHeader);

  const youtubeLink = data.strYoutube.replace("watch?v=", "embed/");
  const recipeYoutube = document.createElement("iframe");
  recipeYoutube.setAttribute("width", 640);
  recipeYoutube.setAttribute("height", 300);
  recipeYoutube.setAttribute("src", youtubeLink);
  container.appendChild(recipeYoutube);

  mainEl.appendChild(container);
}
