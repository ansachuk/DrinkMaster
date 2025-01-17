import { getScopedI18n } from "@/locales/server";

import MainButton from "@/components/MainButton";

export default async function WelcomePage() {
	const t = await getScopedI18n("welcome");
	return (
		<>
			<h1 className="md:text-[40px]  md:w-[485px] leading-8 md:leading-[3rem] md:text-left font-semibold">
				{t("title")}
			</h1>
			<p className="text-sm leading-5 md:w-[470px] lg:w-[485px] mt-3.5 font-normal md:text-lg md:text-left">
				{t("subtitle")}
			</p>
			<div className="flex gap-3 mt-10 justify-center md:justify-start">
				<MainButton variant="outlined" href="/welcome/signup">
					{t("register")}
				</MainButton>
				<MainButton href="/welcome/signin">{t("signIn")}</MainButton>

				{/* TODO: add small accordion or smth for language switching arrow right > then lang sign and on click will be open with animation and some flags */}
			</div>
		</>
	);
}
