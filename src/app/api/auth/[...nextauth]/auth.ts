import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
	providers: [Google({ clientId: "", clientSecret: "" })],
};

export default authOptions;
