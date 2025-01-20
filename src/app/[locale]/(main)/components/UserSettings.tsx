"use client";

import { useState } from "react";
import Image from "next/image";
import {
	UserCircleIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import UserSettingsModal from "./UserSettingsModal";

export default function UserSettings() {
	const [modalType, setModalType] = useState<
		"" | "logout" | "settings" | "confirm"
	>("");
	const [isSidebarOpen, setisSidebarOpen] = useState(false);

	const userImage = "";
	const userName = "";
	return (
		<div
			onClick={() => setModalType("logout")}
			className="cursor-pointer flex items-center gap-2 md:gap-3.5"
		>
			{userImage ? (
				<Image
					src={userImage}
					width={44}
					height={44}
					quality={100}
					alt={`${userName} image`}
					className="rounded-full w-8 h-8 md:w-11 md:h-11"
				/>
			) : (
				<UserCircleIcon className="w-8 h-8 text-zinc-50/50" />
			)}

			<button
				type="button"
				className="text-sm md:text-base font-medium w-18 md:w-24 lg:w-auto truncate"
			>
				<p className="sr-only">Open user menu</p>
				{userName ? userName : "Username"}
			</button>

			<div className="relative h-full w-0">
				<UserSettingsModal setModalType={setModalType} type={modalType} />
			</div>

			<button
				type="button"
				className="lg:hidden text-zinc-50 hover:opacity-80 transition-opacity"
				onClick={() => setisSidebarOpen(!isSidebarOpen)}
			>
				<p className="sr-only">Open sidebar</p>
				{isSidebarOpen ? (
					<XMarkIcon className="w-8 h-8" />
				) : (
					<Bars3Icon className="w-8 h-8" />
				)}
			</button>
		</div>
	);
}
