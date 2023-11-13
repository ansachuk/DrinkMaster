import { AppState } from "@/@types/AppTypes";

export const selectMainCocktails = ({ recipes }: AppState) => recipes.mainCocktails;
export const selectByCategory = ({ recipes }: AppState) => recipes.byCategory;
export const selectByID = ({ recipes }: AppState) => recipes.byID;
export const selectFavorite = ({ recipes }: AppState) => recipes.favorite;
export const selectPopular = ({ recipes }: AppState) => recipes.popular;
export const selectCategories = ({ recipes }: AppState) => recipes.categories;
export const selectGlasses = ({ recipes }: AppState) => recipes.glasses;
export const selectIngredients = ({ recipes }: AppState) => recipes.ingredients;
export const selectSearchResults = ({ recipes }: AppState) => recipes.searchResults;
export const selectOwn = ({ recipes }: AppState) => recipes.own;
export const selectPage = ({ recipes }: AppState) => recipes.page;
export const selectTotalHits = ({ recipes }: AppState) => recipes.totalHits;
export const selectRecipeIsLoading = ({ recipes }: AppState) => recipes.isLoading;

// export const selectSearch = ({ recipes }: AppState) => recipes.search;
