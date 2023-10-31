"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./Auth.module.scss";

// import { useDispatch } from "react-redux";
// import { signup } from "../../../redux/operations/authOperations";
import { schemaSignup } from "@/schemas/schema";
import { Signup } from "@/@types/authTypes";
import Link from "next/link";

export default function SignupForm() {
	// const dispatch = useDispatch();

	const handleSubmit = (values: Signup) => {
		// dispatch(signup(values));
	};

	return (
		<div className={css.container}>
			<h2 className={css.titleSignup}>Registration</h2>
			<Formik initialValues={{ name: "", email: "", password: "" }} validationSchema={schemaSignup} onSubmit={handleSubmit}>
				<Form className={css.form}>
					<Field className={css.label} name="name" type="text" placeholder="Name" autoComplete="off" required />
					<Field className={css.label} name="email" type="email" placeholder="Email" autoComplete="off" required />
					<ErrorMessage className={css.error} name="email" component="div" />
					<Field className={css.label} name="password" type="password" placeholder="Password" autoComplete="off" required />
					<ErrorMessage className={css.error} name="password" component="div" />
					<button className={css.btnSignup} type="submit">
						Sign Up
					</button>
					<Link className={css.linkSignUp} href="/welcome/signin">
						Sign In
					</Link>
				</Form>
			</Formik>
		</div>
	);
}
