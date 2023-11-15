import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "../scss/global.scss";

const font = Manrope({
	weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
	title: "DrinkMaster",
	description: "Generated @ansachuk",
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={font.className}>{children}</body>
		</html>
	);
}
