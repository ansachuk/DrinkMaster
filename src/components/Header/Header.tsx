"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

// import { useLocation } from "react-router-dom";
import css from "./Header.module.scss";

export default function Header() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
	const [isOpenBurgerMenu, setisOpenBurgerMenu] = useState(false);

	const location = useLocation();

	const toggleMenu = () => setisOpenBurgerMenu(!isOpenBurgerMenu);

	const updateMedia = () => {
		setIsDesktop(window.innerWidth >= 1280);
		if (isDesktop) {
			setisOpenBurgerMenu(false);
		}
	};

	const handlerBackdropClicks = e => {
		const backdrop = e.target.closest("#burger_menu") === null && e.target.closest("#navigation") === null;
		if (backdrop) {
			setisOpenBurgerMenu(false);
		}
	};

	const handlerEscClick = e => {
		const target = e.key === "Escape";
		if (target) {
			setisOpenBurgerMenu(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		if (isOpenBurgerMenu) {
			window.addEventListener("click", handlerBackdropClicks);
			window.addEventListener("keydown", handlerEscClick);
		}

		return () => {
			window.removeEventListener("resize", updateMedia);
			window.removeEventListener("click", handlerBackdropClicks);
			window.removeEventListener("keydown", handlerEscClick);
		};
	});

	useEffect(() => {
		setisOpenBurgerMenu(false);
	}, [location.pathname]);

	return (
		<>
			<header className={css.header}>
				<div className={css.header_wrapper}>
					<Logo />
					{isDesktop && <Nav />}
					<UserMenu />
					<BurgerMenu toggleMenu={toggleMenu} isOpenBurgerMenu={isOpenBurgerMenu} isDesktop={isDesktop} />
				</div>
			</header>
		</>
	);
}
