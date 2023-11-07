import store from "@/toolkit/store";

export type AppState = {
	isLoading: boolean;
	error: Error | null;
};

export type AppDispatch = typeof store.dispatch;
