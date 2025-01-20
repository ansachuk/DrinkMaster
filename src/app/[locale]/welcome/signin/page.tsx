import I18nSubLayout from "@/components/I18nSubLayout";
import AuthForm from "../components/AuthForm";

interface SignInPageProps {
	params: {
		locale: string;
	};
}

export default function SignInPage({ params: { locale } }: SignInPageProps) {
	return (
		<I18nSubLayout locale={locale}>
			<AuthForm type="signin" />
		</I18nSubLayout>
	);
}
