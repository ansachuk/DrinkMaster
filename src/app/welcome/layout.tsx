type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
	return (
		<main>
			welcome layout
			{children}
		</main>
	);
}
