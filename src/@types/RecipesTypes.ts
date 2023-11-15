import { Category, Glass } from "./staticTypes";

export type Search = {
	category: string;
	ingredient: string;
	searchWord: string;
	page: number;
	limit: number;
};

export type Ingredient = {
	_id?: string;
	title: string;
	measure?: string;
	ingredientThumb: string;
	thumbMedium: string;
	thumbSmall: string;
};

export type Cocktail = {
	_id: string;
	drink: string;
	drinkAlternate: string;
	tags: string;
	video: string;
	category: Category;
	IBA: string;
	alcoholic: string;
	glass: Glass;
	instructions: string;
	instructionsES: string;
	instructionsDE: string;
	instructionsFR: string;
	instructionsIT: string;
	instructionsRU: string;
	instructionsPL: string;
	instructionsUK: string;
	drinkThumb: string;
	ingredients: Array<Ingredient>;
	favorite: Array<string>;
	updatedAt: string;
};

export type RecipeState = {
	mainCocktails: MainPageResponce;
	byCategory: Array<Cocktail>;
	byID: Cocktail | null;
	favorite: CocktailFetchResult;
	own: Array<Cocktail>;
	popular: Array<Cocktail>;
	categories: Array<Category>;
	glasses: Array<Glass>;
	ingredients: Array<Ingredient>;
	searchResults: Array<Cocktail>;
	isLoading: boolean;
	totalHits: number;
	error: Error | null;
	page: number;
	limit: number;
};

export type MainPageResponce = Array<{
	_id: string;
	recipes: Array<Cocktail>;
}>;

type CocktailArray = Array<Cocktail>;
type CocktailFetchResult = Pick<RecipeState, "limit" | "totalHits" | "page"> & { result: Array<Cocktail> };

export type AllIngredientsResponce = Array<Ingredient>;
export type RemoveOwnResponce = { deletedRecipe: Cocktail };
export type RemoveFavoriteResponce = { result: Cocktail };

export type PopularResponce = CocktailArray;
export type OwnResponce = CocktailArray;

export type FavoriteResponce = CocktailFetchResult;
export type SearchResponce = CocktailFetchResult;
