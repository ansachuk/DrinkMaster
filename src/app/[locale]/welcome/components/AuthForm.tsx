"use client";

import Link from "next/link";
import { Field, Form, Formik } from "formik";

import { useScopedI18n } from "@/locales/client";

import MainButton from "@/components/MainButton";

import { signInSchema, signUpSchema } from "@/app/schemas/authSchemas";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function AuthForm({ type }: { type: "signin" | "signup" }) {
	const t = useScopedI18n("welcome");

	const [isPasswordShown, setIsPasswordShown] = useState(false);

	const className =
		"py-3.5 px-6 rounded-[42px] focus:outline-none  border-gray-100/20 border-2 transition-colors duration-300 text-sm md:text-base bg-transparent text-zinc-50 focus:border-gray-100/60";

	const errorClassName = "text-sm text-semibold pl-2 text-red-500 text-left";

	return (
		<>
			<h1 className="text-left text-3xl md:text-5xl">
				{type === "signup" ? t("register") : t("signIn")}
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
				{({ errors, touched, values, setFieldTouched }) => (
					<Form className="flex flex-col gap-3.5 w-full md:w-[400px] mt-7">
						{type === "signup" && (
							<>
								<Field
									type="text"
									name="name"
									placeholder={t("name")}
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
							placeholder={t("email")}
							className={className}
						/>
						{errors.email && touched.email ? (
							<p className={errorClassName}>{errors.email}</p>
						) : null}

						<div className="w-full relative">
							<Field
								type={isPasswordShown ? "text" : "password"}
								name="password"
								placeholder="Password"
								className={className + " w-full"}
							/>
							{errors.password && touched.password ? (
								<p className={errorClassName}>{errors.password}</p>
							) : null}

							<button
								onClick={e => {
									e.preventDefault();

									setIsPasswordShown(!isPasswordShown);
									setFieldTouched("password", false);
								}}
								className="absolute right-6 top-5"
							>
								{values.password && (
									<>
										{isPasswordShown ? (
											<EyeSlashIcon className="h-5 w-5 text-gray-400" />
										) : (
											<EyeIcon className="h-5 w-5 text-gray-400" />
										)}
									</>
								)}
							</button>
						</div>

						<MainButton type="submit" customStyles="mt-7 md:mt-10">
							{type === "signup" ? t("signUp") : t("signIn")}
						</MainButton>
						<Link href={`/welcome/${type === "signup" ? "signin" : "signup"}`}>
							{type !== "signup" ? t("register") : t("signIn")}
						</Link>
					</Form>
				)}
			</Formik>
		</>
	);
}
