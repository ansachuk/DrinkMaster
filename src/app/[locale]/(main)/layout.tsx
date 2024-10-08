import React from "react";
import Link from "next/link";
import { Logo } from "@/images/svg";

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<Logo />
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
			<div>{children}</div>
			Footer
		</main>
	);
}
