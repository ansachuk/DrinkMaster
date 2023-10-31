import { CSSProperties } from "react";

import css from "./Container.module.scss";

type Props = {
	children: React.ReactNode;
	styleProp: CSSProperties;
};

export default function Container({ children, styleProp }: Props) {
	return (
		<div className={css.container} style={styleProp}>
			{children}
		</div>
	);
}
