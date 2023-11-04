import Link from "next/link";

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
	return (
		<main>
			welcome layout
			{children}
			<Link href="/welcome/signin">signin</Link>
			<br />
			<Link href="/welcome/signup">signup</Link>
		</main>
	);
}
