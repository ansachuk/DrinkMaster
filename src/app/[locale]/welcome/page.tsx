import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

const styles = "py-3.5 px-10 rounded-[42px] border-[1px] border-gray-100/20 transition-colors duration-300 text-sm font-semibold md:text-base";

export default async function WelcomePage() {
	const t = await getScopedI18n("welcome");
	return (
		<>
			<h1 className="text-[28px] md:text-[40px] leading-8 md:text-left font-semibold">{t("title")}</h1>
			<p className="text-sm leading-5 md:w-[470px] lg:w-[485px] mt-3.5 font-normal md:text-lg md:text-left">{t("subtitle")}</p>
			<div className="flex gap-4 mt-10 justify-center md:justify-start">
				<Link className={`${styles} bg-gray-100 text-main-black hover:bg-transparent hover:text-white`} href="/welcome/signup">
					{t("register")}
				</Link>
				<Link className={`${styles} bg-transparent text-zinc-50 hover:bg-gray-100 hover:text-main-black`} href="/welcome/signin">
					{t("signIn")}
				</Link>
			</div>
		</>
	);
}
