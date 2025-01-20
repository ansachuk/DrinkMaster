import React from "react";

import { PencilIcon, XMarkIcon } from "@heroicons/react/24/solid";
import MainButton from "@/components/MainButton";

export default function UserSettingsModal({
	type,
	setModalType,
}: {
	type: "logout" | "settings" | "confirm" | "";
	setModalType: React.Dispatch<
		React.SetStateAction<"logout" | "settings" | "confirm" | "">
	>;
}) {
	return type ? (
		<>
			<div
				className={`absolute lg:hidden top-10 z-20 ${type === "logout" ? "right-0" : "-right-8"}`}
			>
				{type === "logout" && (
					<div className="p-[18px] bg-accent w-44 rounded-lg">
						<button
							onClick={e => {
								e.stopPropagation();
								setModalType("settings");
							}}
							className="w-full font-medium flex items-center justify-between text-sm hover:opacity-70 cursor-pointer"
						>
							Edit profile
							<PencilIcon className="w-3.5 h-3.5" />
						</button>

						<MainButton
							variant="filled"
							customStyles="w-full mt-12 py-3 cursor-pointer"
							onClick={(e: React.MouseEvent) => {
								e.stopPropagation();
								setModalType("confirm");
							}}
						>
							Logout
						</MainButton>
					</div>
				)}
				{type === "settings" && (
					<div className="p-3.5 bg-accent w-[335px] rounded-lg">
						<div className="w-full flex items-center justify-end">
							<button
								onClick={e => {
									e.stopPropagation();
									setModalType("logout");
								}}
							>
								<XMarkIcon className="w-3.5 h-3.5" />
							</button>
						</div>
						{type}
					</div>
				)}
				{type === "confirm" && (
					<div className="p-3.5 bg-accent w-[335px] rounded-lg">
						<div className="w-full flex items-center justify-end">
							<button
								onClick={e => {
									e.stopPropagation();
									setModalType("logout");
								}}
							>
								<XMarkIcon className="w-3.5 h-3.5" />
							</button>
						</div>
						{type}
					</div>
				)}
			</div>
			<div
				onClick={e => {
					e.stopPropagation();
					setModalType("");
				}}
				className="fixed top-0 left-0 w-screen h-screen z-10"
			/>
		</>
	) : (
		<></>
	);
}
