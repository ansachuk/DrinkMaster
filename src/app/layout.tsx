import React from "react";
// import { Inter } from "next/font/google";

import type { Metadata } from "next";

import "@/scss/globals.scss";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "DrinkMaster",
	description: "Very funny site",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
