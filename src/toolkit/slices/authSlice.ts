import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { login, signup, logout, refresh, update, subscribe } from "../operations/authOperations";
import { handlePending, handleRejected, handleFullfilled } from "../utils";
import { AuthState, LoginRespoce } from "@/@types/authTypes";

const initialState: AuthState = {
	user: {
		name: "",
		email: "",
		id: "",
		avatarURL: "",
		subscribe: false,
	},
	accessToken: "",
	isLoggedIn: false,
	isLoading: false,
	error: null,
};

const handleSignUp = (state: AuthState, { payload }) => {
	state.user = { ...state.user, ...payload };
	state.accessToken = payload.token;
	handleFullfilled(state);
};

const handleLogin = (state: AuthState, action: PayloadAction<LoginRespoce>) => {
	const { token, user } = action.payload;
	state.accessToken = token;
	state.user = { ...state.user, ...user };
	state.isLoggedIn = true;

	handleFullfilled(state);
};

const handleUpdate = (state: AuthState, { payload }) => {
	state.user.avatarURL = payload.avatarURL || null;
	state.user.name = payload.name || null;

	handleFullfilled(state);
};

const handleSubcribe = (state: AuthState, { payload }) => {
	state.user.subscribe = payload;

	handleFullfilled(state);
};

const handleRefresh = (state: AuthState, { payload }) => {
	state.user = { ...state.user, ...payload };
	state.isLoggedIn = true;

	handleFullfilled(state);
};

export const handleLogout = (state: AuthState) => {
	state.isLoggedIn = false;
	state.accessToken = "";
	state.user = {
		name: "",
		email: "",
		id: "",
		avatarURL: "",
		subscribe: false,
	};

	handleFullfilled(state);
};

// const handleRefereshRejected = (state, action) => {
// 	console.log(action);
// 	state.isLoggedIn = false;
// 	handleRejected(state, action);
// };

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(signup.fulfilled, handleSignUp)
			.addCase(login.fulfilled, handleLogin)
			.addCase(update.fulfilled, handleUpdate)
			.addCase(subscribe.fulfilled, handleSubcribe)
			.addCase(logout.fulfilled, handleLogout)
			.addCase(refresh.fulfilled, handleRefresh)
			// .addCase(refresh.rejected, (state, action) => {
			// 	state.isLoading = false;
			// 	handleRejected(state, action);
			// })

			.addMatcher(action => action.type.endsWith("/pending"), handlePending)

			.addMatcher(action => action.type.endsWith("/rejected"), handleRejected);
	},
});

export default authSlice.reducer;
