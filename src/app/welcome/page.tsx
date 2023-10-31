import Link from "next/link";

import css from "./WelcomePage.module.scss";

export default function WelcomePage() {
	return (
		<>
			<div className={css.containerWelcome}>
				<h2 className={css.titleStart}>Welcome to the app!</h2>
				<p className={css.textStart}>
					This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and
					retrieve your own recipes at any time.
				</p>
				<div className={css.listStart}>
					<Link href="/welcome/signup" className={css.btnStart}>
						Registration
					</Link>
					<Link href="/welcome/signin" className={css.btnStart}>
						Sign In
					</Link>
				</div>
			</div>
		</>
	);
}
