import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Notify } from "notiflix";

import {
	AllIngredientsResponce,
	Cocktail,
	FavoriteResponce,
	MainPageResponce,
	OwnResponce,
	PopularResponce,
	RemoveFavoriteResponce,
	RemoveOwnResponce,
	Search,
	SearchResponce,
} from "@/@types/RecipesTypes.js";
import { Category, Glass } from "@/@types/staticTypes.js";

import instance from "../instance.js";

const allCategory = createAsyncThunk("recepies/allCategory", async (_, { rejectWithValue }): Promise<Category[]> => {
	try {
		const { data } = await instance.get("recipes/category-list");
		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const mainPage = createAsyncThunk("recepies/mainPage", async (_, { rejectWithValue }): Promise<MainPageResponce> => {
	try {
		const { data } = await instance.get("recipes/main-page");

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

// !===========
const byCategory = createAsyncThunk("recepies/byCategory", async (category, { rejectWithValue }) => {
	try {
		const { data } = await instance.get(`recipes/category/${category}`);

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});
// !===========

const byID = createAsyncThunk("recepies/byID", async (id, { rejectWithValue }): Promise<Cocktail> => {
	try {
		const { data } = await instance.get(`recipes/${id}`);

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const search = createAsyncThunk(
	"recepies/search",
	async ({ category, ingredient, searchWord, page = 1, limit = 9 }: Search, { rejectWithValue }): Promise<SearchResponce> => {
		try {
			const searchWordStr = searchWord ? `&searchWord=${searchWord}` : "";
			const categoryStr = category ? `&category=${category}` : "";
			const ingredientStr = ingredient ? `&ingredient=${ingredient}` : "";

			const URL = `search?page=${page}&limit=${limit}${searchWordStr}${categoryStr}${ingredientStr}`;
			const { data } = await instance.get(URL);

			return data;
		} catch (e) {
			throw rejectWithValue((e as AxiosError).message);
		}
	},
);

const allIngredients = createAsyncThunk("recepies/allIngredients", async (_, { rejectWithValue }): Promise<AllIngredientsResponce> => {
	try {
		const { data } = await instance.get(`ingredients/list`);

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const glasses = createAsyncThunk("recepies/glasses", async (_, { rejectWithValue }): Promise<Array<Glass>> => {
	try {
		const { data } = await instance.get("/glass");

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const own = createAsyncThunk("recepies/own", async (_, { rejectWithValue }): Promise<OwnResponce> => {
	try {
		const { data } = await instance.get(`own`);

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const add = createAsyncThunk("recepies/add", async (cred, { rejectWithValue }): Promise<Cocktail> => {
	try {
		const { data } = await instance.post(`own`, cred, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		Notify.success("Recipe created successfully", {
			timeout: 3000,
		});

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const remove = createAsyncThunk("recepies/remove", async (id, { rejectWithValue }): Promise<RemoveOwnResponce> => {
	try {
		const { data } = await instance.delete(`own/${id}`);

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const favorite = createAsyncThunk("recepies/favorite", async (_, { rejectWithValue }): Promise<FavoriteResponce> => {
	try {
		const { data } = await instance.get(`favorite`);

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

// const favorite = createAsyncThunk(
// 	"recepies/favorite",
// 	async ({ page, limit }, { rejectWithValue }) => {
// 		try {
// 			const { data } = await instance.get(`favorite?page=${page}&limit=${limit}`);
// 			return data;
// 		} catch (e) {
// 			return rejectWithValue(e.response.data.message);
// 		}
// 	},
// );

const addToFavorite = createAsyncThunk("recepies/addToFavorite", async (id, { rejectWithValue }): Promise<Cocktail> => {
	try {
		const { data } = await instance.patch(`favorite/add/${id}`);
		//token

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const removeFromFavorite = createAsyncThunk("recepies/removeFromFavorite", async (id, { rejectWithValue }): Promise<RemoveFavoriteResponce> => {
	try {
		const { data } = await instance.patch(`favorite/remove/${id}`);

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const popular = createAsyncThunk("recepies/popular", async (_, { rejectWithValue }): Promise<PopularResponce> => {
	try {
		const { data } = await instance.get(`popular-recipe`);

		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

export {
	allCategory,
	glasses,
	mainPage,
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
};
