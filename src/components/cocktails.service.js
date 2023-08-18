import axios from "axios";

const url = "https://www.thecocktaildb.com/";

const api = axios.create({
  baseURL: url,
});

const getCocktailList = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getCocktailData = (id) => {
  api
    .get(`api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      return processResults(res.data.drinks);
    })
    .catch((err) => {
      console.log(err);
    });
};

const processResults = (drinks) => {
  if (!drinks) return drinks;
  let processedData = [];
  drinks.map((drink) => {
    const newDrink = {};
    newDrink.id = drink.idDrink;
    newDrink.name = drink.strDrink;
    newDrink.ingredients = [];
    newDrink.imageSrc = drink.strDrinkThumb;
    newDrink.instructions = drink.strInstructionsES;
    Object.keys(drink).map((key) => {
      if (key.includes("strIngredient")) {
        const ingredient = {};
        if (drink[key]) {
          ingredient.name = drink[key];
          const measureKey = `strMeasure${key.replace("strIngredient", "")}`;
          if (drink[measureKey]) {
            ingredient.measure = drink[measureKey];
          }
          newDrink.ingredients.push(ingredient);
        }
      }
    });
    processedData.push(newDrink);
  });
};

export { getCocktailList, getCocktailData };
