import React from "react";
import { Manrope } from "next/font/google";

import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getCurrentLocale } from "@/locales/server";
import { MainBalls, FooterBalls } from "@/components/Balls";
import "@/globals.css";

export const manrope = Manrope({
	weight: ["400", "500", "600"],
	subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
	title: "DrinkMaster",
	description: "Very funny site",
	icons: [
		{ rel: "apple-touch-icon", type: "image/png", url: "/favicon/apple-icon.png", sizes: "180x180" },
		{ rel: "icon", type: "image/png", url: "/favicon/favicon-32x32.png", sizes: "32x32" },
		{ rel: "icon", type: "image/png", url: "/favicon/favicon-16x16.png", sizes: "16x16" },
		{ rel: "mask-icon", type: "image/png", url: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = getCurrentLocale();
	return (
		<html lang={locale}>
			<body className={`bg-main-black text-zinc-50 h-full scroll-smooth ${manrope.className}`}>
				<MainBalls />
				{children}
				<FooterBalls />
				<SpeedInsights />
			</body>
		</html>
	);
}
