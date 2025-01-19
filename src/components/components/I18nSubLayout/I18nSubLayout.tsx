import React from "react";
import { I18nProviderClient } from "@/locales/client";

interface I18nSubLayoutProps {
	children: React.ReactNode;
	locale: string;
}

export default function I18nSubLayout({
	children,
	locale,
}: I18nSubLayoutProps) {
	return (
		<I18nProviderClient fallback="...Loading" locale={locale}>
			{children}
		</I18nProviderClient>
	);
}
