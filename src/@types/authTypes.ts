export type SignIn = {
	email: string;
	password: string;
};

export type Signup = SignIn & { name: string };
