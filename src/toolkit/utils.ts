import { AppState } from "@/@types/AppTypes";
import { RecipeState } from "@/@types/RecipesTypes";
import { AuthState } from "@/@types/authTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

const handlePending = (state: AuthState | RecipeState) => {
	state.isLoading = true;
};

const handleRejected = (state: AuthState | RecipeState, action: PayloadAction<Error>) => {
	state.isLoading = false;
	state.error = action.payload;

	Notify.failure(action.payload.message);
};

const handleFullfilled = (state: AuthState | RecipeState) => {
	state.isLoading = false;
	state.error = null;
};

export { handlePending, handleRejected, handleFullfilled };
