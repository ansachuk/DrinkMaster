import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Welcome({ children }: Props) {
	return <main>{children}</main>;
}
