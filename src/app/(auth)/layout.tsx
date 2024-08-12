import Link from "next/link";
import React from "react";

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			WelcomeLayout <br />
			<Link href="/signin">Signin</Link>
			<br />
			<Link href="/signup">Signup</Link>
			<br />
			{children}
		</>
	);
}
