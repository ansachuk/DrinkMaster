import Container from "@/components/Container";
import React from "react";

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<Container customStyles="h-[100vh] flex flex-col justify-center gap-5 text-center bg-gradient-to-r from-[#060609]/10 to-[#0a0a11]">
				{children}
			</Container>
		</main>
	);
}
