"use client";

import React from "react";
import Link from "next/link";

export default function MainButton({
	children,
	variant = "filled",
	customStyles = "",
	href = "",
	type = "button",
	onClick = () => {},
}: {
	children: React.ReactNode;
	variant?: "filled" | "outlined";
	customStyles?: string;
	href?: string;
	type?: "button" | "submit" | "reset";
	onClick?: () => any;
}) {
	const className = `py-3.5 px-10 rounded-[42px] border border-gray-100/20 transition-colors duration-300 text-sm font-semibold md:text-base cursor-pointer ${
		variant === "filled"
			? "bg-gray-100 text-main-black hover:bg-transparent hover:text-white"
			: "bg-transparent text-zinc-50 hover:bg-gray-100 hover:text-main-black"
	} ${customStyles}`;

	return href ? (
		<Link href={href} onClick={onClick} className={className}>
			{children}
		</Link>
	) : (
		<button type={type} onClick={onClick} className={className}>
			{children}
		</button>
	);
}
