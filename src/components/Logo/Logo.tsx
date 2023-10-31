import Link from "next/link";
import icons from "/icons.svg";
import css from "./Logo.module.scss";

export default function Logo() {
	return (
		<Link href="/">
			<div className={css.logo_group}>
				<svg className={css.icon}>
					<use href={icons + "#logo"}></use>
				</svg>
				<p className={css.name}>Drink Master</p>
			</div>
		</Link>
	);
}
