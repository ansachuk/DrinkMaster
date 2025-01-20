"use client";

import { useState } from "react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function UserSettings() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const userImage = "";
	const userName = "";
	return (
		<div
			onClick={() => setIsModalOpen(true)}
			className="cursor-pointer flex items-center gap-2 md:gap-3.5"
		>
			{userImage ? (
				<Image
					src={userImage}
					width={44}
					height={44}
					quality={100}
					alt="User image"
					className="rounded-full w-8 h-8 md:w-11 md:h-11"
				/>
			) : (
				<UserCircleIcon className="w-8 h-8 text-zinc-50/50" />
			)}
			<p className="text-sm md:text-base font-medium w-18 md:w-24 lg:w-auto truncate">
				{userName ? userName : "Username"}
			</p>
		</div>
	);
}
