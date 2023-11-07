import { AppState } from "@/@types/AppTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { Notify } from "notiflix";

const handlePending = (state: AppState) => {
	state.isLoading = true;
};

const handleRejected = (state: AppState, action: PayloadAction<Error>) => {
	state.isLoading = false;
	state.error = action.payload;

	Notify.failure(action.payload.message);
};

const handleFullfilled = (state: AppState) => {
	state.isLoading = false;
	state.error = null;
};

export { handlePending, handleRejected, handleFullfilled };
