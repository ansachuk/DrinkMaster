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

import { MainPageResponce, RecipeState } from "@/@types/RecipesTypes";
import { Category, Glass } from "@/@types/staticTypes";

const initialState: RecipeState = {
	mainCocktails: [],
	byCategory: [],
	byID: [],
	favorite: [],
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

			.addCase(byCategory.fulfilled, (state, action: PayloadAction) => {
				state.byCategory = payload;
				handleFullfilled(state);
			})
			.addCase(byID.fulfilled, (state, action: PayloadAction) => {
				state.byID = payload;
				handleFullfilled(state);
			})
			.addCase(search.fulfilled, (state, action: PayloadAction) => {
				state.searchResults = payload.result;
				state.totalHits = payload.totalHits;
				handleFullfilled(state);
			})
			.addCase(allIngredients.fulfilled, (state, action: PayloadAction) => {
				state.ingredients = payload;
				handleFullfilled(state);
			})
			.addCase(own.fulfilled, (state, action: PayloadAction) => {
				state.own = payload;
				handleFullfilled(state);
			})
			.addCase(add.fulfilled, (state, action: PayloadAction) => {
				state.own.push(payload);
				handleFullfilled(state);
			})
			.addCase(remove.fulfilled, (state, action: PayloadAction) => {
				state.own = state.own.filter(({ _id }) => _id !== payload.deletedRecipe._id);
				handleFullfilled(state);
			})
			.addCase(favorite.fulfilled, (state, action: PayloadAction) => {
				state.favorite = payload;
				handleFullfilled(state);
			})
			.addCase(addToFavorite.fulfilled, (state, action: PayloadAction) => {
				state.favorite.result.push(payload);
				handleFullfilled(state);
			})
			.addCase(removeFromFavorite.fulfilled, (state, action: PayloadAction) => {
				state.favorite.result = state.favorite.result.filter(({ _id }) => _id !== payload.result._id);
				handleFullfilled(state);
			})
			.addCase(popular.fulfilled, (state, action: PayloadAction) => {
				state.popular = payload;
				handleFullfilled(state);
			})

			.addMatcher(action => action.type.endsWith("/pending"), handlePending)

			.addMatcher(action => action.type.endsWith("/rejected"), handleRejected);
	},
});

export default recepiesSlice.reducer;
