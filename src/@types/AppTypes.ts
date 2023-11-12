import store from "@/toolkit/store";
import { AuthState } from "./authTypes";
import { RecipeState } from "./RecipesTypes";

export type AppState = AuthState & RecipeState;

export type AppDispatch = typeof store.dispatch;
