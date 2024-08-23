import Container from "@/components/Container";
import React from "react";

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<Container customStyles="h-[100vh] flex flex-col justify-center gap-5">{children}</Container>
		</main>
	);
}
