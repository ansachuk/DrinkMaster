import Container from "@/components/Container";
import Logo from "@/components/Logo";
import UserSettings from "./UserSettings";

export default function Header() {
	return (
		<header className="py-5 border-b border-b-zinc-50/20">
			<Container customStyles="flex justify-between items-center">
				<Logo />
				<UserSettings />
			</Container>
		</header>
	);
}
