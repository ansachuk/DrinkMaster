import Link from "next/link";
import isLoggedIn from "../boo";
import { redirect } from "next/navigation";

import css from "./WelcomePage.module.scss";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
	return isLoggedIn ? (
		redirect("/")
	) : (
		<div className={css.containerLayout}>
			<div className={css.gradientContainer}></div>
			<div className={css.circleContainer}></div>
			{children}
		</div>
	);
}
