import axios from "axios";

const url = "https://www.thecocktaildb.com/";

const api = axios.create({
  baseURL: url,
});

const getCocktailById = async (id) => {
  api
    .get(`api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => {
      return sanitizeResults(res.data.drinks);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getCocktailsByName = async (name) => {
  try {
    const res = await api.get(`api/json/v1/1/search.php?s=${name}`);
    return sanitizeResults(res.data.drinks);
  } catch (err) {
    console.log(err);
  }
};

const getCocktailsByFirstLeter = async (letter) => {
  try {
    const res = await api.get(`api/json/v1/1/search.php?f=${letter}`);
    return sanitizeResults(res.data.drinks);
  } catch (e) {
    console.log(e);
  }
};

const getCocktailsByIngredient = async (ingredient) => {
  try {
    const res = await api.get(`api/json/v1/1/filter.php?i=${ingredient}`);
    return sanitizeResults(res.data.drinks);
  } catch (err) {
    console.log(err);
  }
};

const getRandomCocktail = async () => {
  try {
    const res = await api.get(`api/json/v1/1/random.php`);
    return sanitizeResults(res.data.drinks);
  } catch (err) {
    console.log(err);
  }
};

const getAllCocktails = async (letters) => {
  try {
    const promises = [];

    letters.map((letter) => {
      promises.push(api.get(`api/json/v1/1/search.php?f=${letter}`));
    });

    return promises;
  } catch (e) {
    console.log(e);
  }
};

const sanitizeResults = (drinks) => {
  if (!drinks) return drinks;
  let sanitizedResults = [];
  drinks.map((drink) => {
    const newDrink = {};
    newDrink.id = drink.idDrink;
    newDrink.name = drink.strDrink;
    newDrink.ingredients = [];
    newDrink.imageSrc = drink.strDrinkThumb;
    newDrink.instructions = drink.strInstructions;
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
    sanitizedResults.push(newDrink);
  });
  return sanitizedResults;
};

export {
  getCocktailById,
  getCocktailsByName,
  getCocktailsByFirstLeter,
  getCocktailsByIngredient,
  getRandomCocktail,
  getAllCocktails,
  sanitizeResults,
};
