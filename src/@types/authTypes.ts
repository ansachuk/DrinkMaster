type accessToken = string;

export type SignIn = {
	email: string;
	password: string;
};

export type Signup = SignIn & { name: string };

export type User = Omit<Signup, "password"> & {
	// id?: string;
	avatarURL: string;
	subscribe: boolean;
};

export type AuthState = {
	user: User;
	accessToken: accessToken;
	isLoggedIn: boolean;
	isLoading: boolean;
	error: Error | null;
};

export type LoginRespoce = Pick<AuthState, "user"> & { token: accessToken };

export type SignupResponce = Omit<Signup, "password"> & User & { token: accessToken };

export type UpdateResponce = Partial<Pick<User, "avatarURL" | "name">>;
