import React from "react";
import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			Header
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
			<div style={{ backgroundColor: "grey" }}>{children}</div>
			Footer
		</main>
	);
}
