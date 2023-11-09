"use client";

// import { useDispatch } from "react-redux";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";

// import { login } from "../../../redux/operations/authOperations";
import { schemaSignin } from "@/schemas/schema";
import { SignIn } from "@/@types/AuthTypes";

import css from "../signup/Auth.module.scss";

export default function SigninForm() {
	// const dispatch = useDispatch();

	const handleSubmit = (values: SignIn) => {
		// dispatch(login(values));
	};

	return (
		<div className={css.container}>
			<h2 className={css.titleSignup}>Sign In</h2>
			<Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit} validationSchema={schemaSignin}>
				<Form className={css.form}>
					<Field className={css.label} name="email" type="email" placeholder="Email" autoComplete="off" required />
					<ErrorMessage className={css.error} name="email" component="div" />
					<Field className={css.label} name="password" type="password" placeholder="Password" autoComplete="off" required />
					<ErrorMessage className={css.error} name="password" component="div" />
					<button className={css.btnSignup} type="submit">
						Sign In
					</button>
					<Link className={css.linkSignUp} href="/welcome/signup">
						Registration
					</Link>
				</Form>
			</Formik>
		</div>
	);
}
