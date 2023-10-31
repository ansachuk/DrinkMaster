import type { Metadata } from "next";
import Link from "next/link";

import "../scss/global.scss";

export const metadata: Metadata = {
	title: "DrinkMaster",
	description: "Generated @ansachuk",
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body>
				{/* <header>
					<Link href="/">home</Link>
					<br />
					<Link href="/welcome">welcome</Link>
					<br />
					<Link href="/add">add</Link>
					<br />
					<Link href="/drinks">drinks</Link>
					<br />
					<Link href="/favorite">favorite</Link>
					<br />
					<Link href="/my">my</Link>
				</header> */}

				{children}
			</body>
		</html>
	);
}
