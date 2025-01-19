import I18nSubLayout from "@/components/components/I18nSubLayout/I18nSubLayout";
import AuthForm from "../components/AuthForm";

interface SignUpPageProps {
	params: {
		locale: string;
	};
}

export default function SignUpPage({ params: { locale } }: SignUpPageProps) {
	return (
		<I18nSubLayout locale={locale}>
			<AuthForm type="signup" />
		</I18nSubLayout>
	);
}
