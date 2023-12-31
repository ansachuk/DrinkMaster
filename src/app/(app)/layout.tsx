import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import isLoggedIn from "../boo";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
	return isLoggedIn ? (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	) : (
		redirect("/welcome")
	);
}
