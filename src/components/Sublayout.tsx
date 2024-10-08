// app/[locale]/client/layout.tsx
import { I18nProviderClient } from "@/locales/client";
import { ReactElement } from "react";

export default function SubLayout({ params: { locale }, children }: { params: { locale: string }; children: ReactElement }) {
	return (
		<I18nProviderClient fallback="...Loading" locale={locale}>
			{children}
		</I18nProviderClient>
	);
}
