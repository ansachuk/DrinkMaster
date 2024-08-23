import React from "react";

export default function Container({ children, customStyles = "" }: { children: React.ReactNode; customStyles?: string }) {
	return <div className={`py-0 px-5 mb-20 md:px-8 md:mb-36 xl:px-24 ${customStyles}`}>{children}</div>;
}
