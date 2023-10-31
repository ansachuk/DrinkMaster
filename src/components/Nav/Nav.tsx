import { LegacyRef, forwardRef } from "react";
import Link from "next/link";

import css from "./Nav.module.scss";

const Nav = forwardRef((_, ref: LegacyRef<HTMLElement>) => {
	return (
		<nav className={css.nav} ref={ref}>
			<ul className={css.list} id="navigation">
				<li className={css.item}>
					<Link href="/" className={css.link}>
						Home
					</Link>
				</li>
				<li className={css.item}>
					<Link href="/drinks" className={css.link}>
						Drinks
					</Link>
				</li>
				<li className={css.item}>
					<Link href="/add" className={css.link}>
						Add recipe
					</Link>
				</li>
				<li className={css.item}>
					<Link href="/my" className={css.link}>
						My recipes
					</Link>
				</li>
				<li className={css.item}>
					<Link href="/favorite" className={css.link}>
						Favorites
					</Link>
				</li>
			</ul>
		</nav>
	);
});

Nav.displayName = "Nav";

export default Nav;
