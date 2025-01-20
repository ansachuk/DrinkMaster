import React from "react";

export default function Container({
	children,
	customStyles = "",
}: {
	children: React.ReactNode;
	customStyles?: string;
}) {
	return (
		<div
			className={`py-0 mx-auto px-5 md:px-16 xl:px-24 md:max-w-[768px] lg:max-w-[1440px] ${customStyles}`}
		>
			{children}
		</div>
	);
}
