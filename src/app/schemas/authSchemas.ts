import { object, string } from "yup";
import { passwordRegex } from "../utils/regex";

export const signInSchema = object().shape({
	email: string().email("Invalid email").required("Email is required"),
	password: string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters long")
		.matches(
			passwordRegex,
			"Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number",
		),
});

export const signUpSchema = signInSchema.shape({
	name: string().required("Name is required"),
});
