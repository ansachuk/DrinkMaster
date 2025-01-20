import React from "react";

import { PencilIcon } from "@heroicons/react/24/solid";
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
			<div className="absolute lg:hidden top-9 z-20 right-0">
				{type === "logout" && (
					<div className="p-[18px] bg-accent w-44 rounded-lg">
						<button
							onClick={() => setModalType("settings")}
							className="w-full font-medium flex items-center justify-between text-sm hover:opacity-70 "
						>
							Edit profile
							<PencilIcon className="w-3.5 h-3.5" />
						</button>

						<MainButton
							variant="filled"
							customStyles="w-full mt-12 py-3"
							onClick={() => setModalType("confirm")}
						>
							Logout
						</MainButton>
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
