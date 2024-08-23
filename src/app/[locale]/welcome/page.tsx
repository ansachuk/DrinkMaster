import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

export default async function WelcomePage() {
	const t = await getScopedI18n("welcome");
	return (
		<>
			<h1>{t("title")}</h1>
			<p>{t("subtitle")}</p>
			<div className="flex">
				<Link href="/welcome/signup">{t("register")}</Link>
				<Link href="/welcome/signin">{t("signIn")}</Link>
			</div>
		</>
	);
}
