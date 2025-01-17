import React from "react";
import Image from "next/image";

import Container from "@/components/Container";

import welcomeSmImage from "@/images/welcome/welcomeSmImage.webp";
import welcomeMdImage from "@/images/welcome/welcomeMdImage.webp";
import welcomeLgImage from "@/images/welcome/welcomeLgImage.webp";

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="relative">
			<Container customStyles="h-[100vh] flex flex-col justify-center text-center">{children}</Container>
			<div className="fixed right-0 top-0 -z-[60] bg-gradient-to-r from-[#060609]/10 to-[#0a0a11]/0">
				<Image
					alt="A glass with the cocktail"
					sizes="50vw"
					quality={100}
					src={welcomeSmImage}
					width={587}
					height={812}
					priority={true}
					placeholder="blur"
					style={{ width: "auto" }}
					className=" h-[100vh] md:hidden"
				/>
				<Image
					alt="A glass with the cocktail"
					sizes="60vw"
					quality={100}
					src={welcomeMdImage}
					priority={true}
					placeholder="blur"
					style={{ width: "auto" }}
					className=" h-[100vh] hidden md:block lg:hidden"
				/>
				<Image
					alt="A glass with the cocktail"
					sizes="30vw"
					quality={100}
					src={welcomeLgImage}
					priority={true}
					style={{ width: "auto" }}
					placeholder="blur"
					className=" h-[100vh] hidden lg:block"
				/>
			</div>
		</main>
	);
}
