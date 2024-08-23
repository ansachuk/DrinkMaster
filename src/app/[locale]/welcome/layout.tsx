import React from "react";
import Image from "next/image";

import Container from "@/components/Container";

import welcomeSmImage from "@/images/welcomeSmImage.webp";

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="relative">
			<Container customStyles="h-[100vh] flex flex-col justify-center gap-5 text-center bg-gradient-to-r from-[#060609]/10 to-[#0a0a11]/0  ">
				{children}
			</Container>
			<Image
				alt="A glass with the cocktail"
				sizes="100vw"
				quality={100}
				src={welcomeSmImage}
				width={587}
				height={812}
				priority={true}
				style={{ width: "auto" }}
				className="fixed -right-0 top-0 h-[100vh] -z-[60] md:hidden"
			/>
		</main>
	);
}
