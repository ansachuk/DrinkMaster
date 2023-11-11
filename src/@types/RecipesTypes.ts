export type Ingredient = {
	_id?: string;
	title: string;
	measure?: string;
	ingredientThumb: string;
	thumbMedium: string;
	thumbSmall: string;
};

export type Glass =
	| "Highball glass"
	| "Cocktail glass"
	| "Old-fashioned glass"
	| "Whiskey Glass"
	| "Collins glass"
	| "Pousse cafe glass"
	| "Champagne flute"
	| "Whiskey sour glass"
	| "Cordial glass"
	| "Brandy snifter"
	| "White wine glass"
	| "Nick and Nora Glass"
	| "Hurricane glass"
	| "Coffee mug"
	| "Shot glass"
	| "Jar"
	| "Irish coffee cup"
	| "Punch bowl"
	| "Pitcher"
	| "Pint glass"
	| "Copper Mug"
	| "Wine Glass"
	| "Beer mug"
	| "Margarita/Coupette glass"
	| "Beer pilsner"
	| "Beer Glass"
	| "Parfait glass"
	| "Mason jar"
	| "Margarita glass"
	| "Martini Glass"
	| "Balloon Glass"
	| "Coupe Glass";

export type Category =
	| "Beer"
	| "Cocktail"
	| "Cocoa"
	| "Coffee / Tea"
	| "Homemade Liqueur"
	| "Ordinary Drink"
	| "Other/Unknown"
	| "Punch/Party Drink"
	| "Shake"
	| "Shot";

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
	mainCocktails: Array<Cocktail>;
	byCategory: Array<Cocktail>;
	byID: Array<Cocktail>;
	favorite: Array<Cocktail>;
	own: Array<Cocktail>;
	popular: Array<Cocktail>;
	categories: Array<Cocktail>;
	glasses: Array<Cocktail>;
	ingredients: Array<Cocktail>;
	searchResults: Array<Cocktail>;
	isLoading: boolean;
	totalHits: number;
	error: Error | null;
	page: number;
	limit: number;
};
