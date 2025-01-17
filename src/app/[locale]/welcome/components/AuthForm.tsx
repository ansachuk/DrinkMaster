"use client";

import Link from "next/link";
import { Field, Form, Formik } from "formik";

import MainButton from "@/components/MainButton";

import { signInSchema, signUpSchema } from "@/app/schemas/authSchemas";

export default function AuthForm({ type }: { type: "signin" | "signup" }) {
	const className =
		"py-3.5 px-6 rounded-[42px] focus:outline-none  border-gray-100/20 border-2 transition-colors duration-300 text-sm md:text-base bg-transparent text-zinc-50 focus:border-gray-100/60";

	const errorClassName = "text-sm text-semibold pl-2 text-red-500 text-left";

	return (
		<>
			<h1 className="text-left text-3xl md:text-5xl">
				{type === "signup" ? "Registration" : "Sign In"}
			</h1>
			<Formik
				initialValues={{
					name: "",
					email: "",
					password: "",
				}}
				validationSchema={type === "signin" ? signInSchema : signUpSchema}
				onSubmit={async values => {
					try {
						// TODO: Implement actual authentication logic here
						console.log("Form values:", values);
					} catch (error) {
						console.error("Form submission error:", error);
					}
				}}
			>
				{({ errors, touched }) => (
					<Form className="flex flex-col gap-3.5 w-full md:w-[400px] mt-7">
						{type === "signup" && (
							<>
								<Field
									type="text"
									name="name"
									placeholder="Name"
									className={className}
								/>
								{errors.name && touched.name ? (
									<p className={errorClassName}>{errors.name}</p>
								) : null}
							</>
						)}

						<Field
							type="email"
							name="email"
							placeholder="Email"
							className={className}
						/>
						{errors.email && touched.email ? (
							<p className={errorClassName}>{errors.email}</p>
						) : null}

						<Field
							type="password"
							name="password"
							placeholder="Password"
							className={className}
						/>
						{errors.password && touched.password ? (
							<p className={errorClassName}>{errors.password}</p>
						) : null}

						<MainButton type="submit" customStyles="mt-7 md:mt-10">
							{type === "signup" ? "Sign Up" : "Sign In"}
						</MainButton>
						<Link href={`/welcome/${type === "signup" ? "signin" : "signup"}`}>
							{type !== "signup" ? "Registration" : "Sign In"}
						</Link>
					</Form>
				)}
			</Formik>
		</>
	);
}
