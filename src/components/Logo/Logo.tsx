import Link from "next/link";
import Image from "next/image";
import icons from "../../../public/images/icons.svg";

import css from "./Logo.module.scss";

export default function Logo() {
	return (
		<Link href="/">
			<div className={css.logo_group}>
				<Image className={css.icon} src={icons + "#logo"} height="22" width="22" alt="Logo" />

				<p className={css.name}>Drink Master</p>
			</div>
		</Link>
	);
}
