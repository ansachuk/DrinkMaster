import Link from "next/link";
import isLoggedIn from "../boo";
import { redirect } from "next/navigation";

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
	return isLoggedIn ? (
		redirect("/")
	) : (
		<main>
			welcome layout
			{children}
			<Link href="/welcome/signin">signin</Link>
			<br />
			<Link href="/welcome/signup">signup</Link>
		</main>
	);
}
