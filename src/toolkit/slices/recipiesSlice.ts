import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { handlePending, handleRejected, handleFullfilled } from "../utils";
import {
	allCategory,
	mainPage,
	glasses,
	byCategory,
	byID,
	search,
	allIngredients,
	add,
	own,
	remove,
	favorite,
	addToFavorite,
	removeFromFavorite,
	popular,
} from "../operations/recipiesOperations";

import {
	AllIngredientsResponce,
	Cocktail,
	FavoriteResponce,
	MainPageResponce,
	OwnResponce,
	PopularResponce,
	RecipeState,
	RemoveFavoriteResponce,
	RemoveOwnResponce,
	SearchResponce,
} from "@/@types/RecipesTypes";
import { Category, Glass } from "@/@types/staticTypes";

const initialState: RecipeState = {
	mainCocktails: [],
	byCategory: [],
	byID: null,
	favorite: {
		page: 1,
		totalHits: 0,
		limit: 9,
		result: [],
	},
	own: [],
	popular: [],
	categories: [],
	glasses: [],
	ingredients: [],
	searchResults: [],
	isLoading: false,
	totalHits: 0,
	error: null,
	page: 1,
	limit: 9,
};

const recepiesSlice = createSlice({
	name: "recipes",
	initialState,
	// reducers: {
	// 	setPage: (state, { payload }) => {
	// 		state.page = payload;
	// 	},
	// },
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(allCategory.fulfilled, (state, action: PayloadAction<Category[]>) => {
				state.categories = action.payload;
				handleFullfilled(state);
			})
			.addCase(mainPage.fulfilled, (state, action: PayloadAction<MainPageResponce>) => {
				state.mainCocktails = action.payload;
				handleFullfilled(state);
			})
			.addCase(glasses.fulfilled, (state, action: PayloadAction<Glass[]>) => {
				state.glasses = action.payload;
				handleFullfilled(state);
			})
			// !===========
			.addCase(byCategory.fulfilled, (state, { payload }) => {
				state.byCategory = payload;
				handleFullfilled(state);
			})
			// !===========
			.addCase(byID.fulfilled, (state, action: PayloadAction<Cocktail>) => {
				state.byID = action.payload;
				handleFullfilled(state);
			})
			.addCase(search.fulfilled, (state, action: PayloadAction<SearchResponce>) => {
				const { result, totalHits } = action.payload;
				state.searchResults = result;
				state.totalHits = totalHits;
				handleFullfilled(state);
			})
			.addCase(allIngredients.fulfilled, (state, action: PayloadAction<AllIngredientsResponce>) => {
				state.ingredients = action.payload;
				handleFullfilled(state);
			})
			.addCase(own.fulfilled, (state, action: PayloadAction<OwnResponce>) => {
				state.own = action.payload;
				handleFullfilled(state);
			})
			.addCase(add.fulfilled, (state, action: PayloadAction<Cocktail>) => {
				state.own.push(action.payload);
				handleFullfilled(state);
			})
			.addCase(remove.fulfilled, (state, action: PayloadAction<RemoveOwnResponce>) => {
				const { deletedRecipe } = action.payload;
				state.own = state.own.filter(({ _id }) => _id !== deletedRecipe._id);
				handleFullfilled(state);
			})
			.addCase(favorite.fulfilled, (state, action: PayloadAction<FavoriteResponce>) => {
				state.favorite = action.payload;
				handleFullfilled(state);
			})
			.addCase(addToFavorite.fulfilled, (state, action: PayloadAction<Cocktail>) => {
				state.favorite.result.push(action.payload);
				state.favorite.totalHits += 1;
				handleFullfilled(state);
			})
			.addCase(removeFromFavorite.fulfilled, (state, action: PayloadAction<RemoveFavoriteResponce>) => {
				const { result } = action.payload;
				state.favorite.result = state.favorite.result.filter(({ _id }) => _id !== result._id);
				handleFullfilled(state);

				state.favorite.totalHits -= 1;
			})
			.addCase(popular.fulfilled, (state, action: PayloadAction<PopularResponce>) => {
				state.popular = action.payload;
				handleFullfilled(state);
			})

			.addMatcher(action => action.type.endsWith("/pending"), handlePending)

			.addMatcher(action => action.type.endsWith("/rejected"), handleRejected);
	},
});

export default recepiesSlice.reducer;
