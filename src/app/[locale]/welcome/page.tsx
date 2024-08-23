import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

const styles =
	"py-4 px-10 rounded-[42px] border-[1px] border-gray-100/20 bg-gray-100 text-main-black hover:bg-transparent hover:text-white transition-colors duration-300 text-sm";

export default async function WelcomePage() {
	const t = await getScopedI18n("welcome");
	return (
		<>
			<h1 className="text-[28px] leading-8 font-semibold">{t("title")}</h1>
			<p className="text-sm leading-5 font-normal">{t("subtitle")}</p>
			<div className="flex gap-4 justify-center ">
				<Link className={`${styles} `} href="/welcome/signup">
					{t("register")}
				</Link>
				<Link className={`${styles}`} href="/welcome/signin">
					{t("signIn")}
				</Link>
			</div>
		</>
	);
}
