import React from "react";
import Link from "next/link";

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			WelcomeLayout <br />
			<Link href="/welcome">Welcome</Link>
			<br />
			<Link href="/welcome/signin">Signin</Link>
			<br />
			<Link href="/welcome/signup">Signup</Link>
			<br />
			{children}
		</>
	);
}
