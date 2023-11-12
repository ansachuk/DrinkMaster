import { Category, Glass } from "./staticTypes";

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
	byID: Array<Cocktail>;
	favorite: Array<Cocktail>;
	own: Array<Cocktail>;
	popular: Array<Cocktail>;
	categories: Array<Category>;
	glasses: Array<Glass>;
	ingredients: Array<Cocktail>;
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
