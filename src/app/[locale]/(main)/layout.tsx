import React from "react";
import Link from "next/link";

import Header from "./components/Header";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main>
				<br />
				<Link href="/welcome">Welcome</Link>
				<br />
				<Link href="/">Home</Link>
				<br />
				<Link href="/add">Add</Link>
				<br />
				<Link href="/my">My</Link>
				<br />
				<Link href="/favorites">Favorites</Link>
				<br />
				<Link href="/recipe/1">recipe</Link>
				<div>{children}</div>
				Footer
			</main>
		</>
	);
}
