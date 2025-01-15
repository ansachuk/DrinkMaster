import React from "react";

export default function Container({ children, customStyles = "" }: { children: React.ReactNode; customStyles?: string }) {
	return <div className={`py-0 px-5 md:px-16 xl:px-24 ${customStyles}`}>{children}</div>;
}
