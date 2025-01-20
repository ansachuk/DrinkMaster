import Link from "next/link";

import { Logo as LogoIcon } from "@/images/svg";

export default function Logo({ isLink = true }) {
	return isLink ? (
		<Link
			href="/"
			className="flex gap-2 items-center text-base md:text-lg font-semibold"
		>
			<LogoIcon
				width={22}
				height={22}
				className="w-[22px] h-[22px] md:w-7 md:h-7"
			/>
			Drink Master
		</Link>
	) : (
		<span className="flex gap-2 items-center text-base md:text-lg font-semibold">
			<LogoIcon
				width={22}
				height={22}
				className="w-[22px] h-[22px] md:w-7 md:h-7"
			/>
			Drink Master
		</span>
	);
}
