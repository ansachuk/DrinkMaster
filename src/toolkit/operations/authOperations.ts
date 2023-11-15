import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import instance, { setAuthJWTHeader, clearAuthJWTHeader } from "../instance.js";
import { LoginRespoce, SignIn, Signup, SignupResponce, UpdateResponce } from "@/@types/AuthTypes.js";
import { AppState } from "@/@types/AppTypes.js";

const signup = createAsyncThunk("auth/signup", async (creds: Signup, { rejectWithValue }): Promise<SignupResponce> => {
	try {
		const { data } = await instance.post("users/register", creds);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const login = createAsyncThunk("auth/login", async (creds: SignIn, { rejectWithValue }): Promise<LoginRespoce> => {
	try {
		const { data } = await instance.post("users/login", creds);
		setAuthJWTHeader(data.token);
		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const update = createAsyncThunk("auth/update", async (creds, { rejectWithValue }): Promise<UpdateResponce> => {
	try {
		const { data } = await instance.patch("users/update", creds, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
	try {
		const { data } = await instance.post("users/logout");
		clearAuthJWTHeader();
		return data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

const refresh = createAsyncThunk(
	"auth/refresh",
	async (token: string, { rejectWithValue }) => {
		try {
			setAuthJWTHeader(token);
			const { data } = await instance.get("users/current");
			return data;
		} catch (e) {
			throw rejectWithValue((e as AxiosError).message);
		}
	},
	{
		condition: (_, { getState }) => {
			const state = getState();
			if (!(state as AppState).auth.accessToken) {
				return false;
			}
		},
	},
);

const subscribe = createAsyncThunk("auth/subscribe", async (creds, { rejectWithValue }) => {
	try {
		const res = await instance.patch("users/subscribe", creds);
		return res.data;
	} catch (e) {
		throw rejectWithValue((e as AxiosError).message);
	}
});

export { login, signup, logout, refresh, update, subscribe };
