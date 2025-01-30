import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import dbConnect from "@/db/connect";
import User from "@/db/models/User";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await dbConnect();
      const existingUser = await User.findOne({ email: user.email });
      return existingUser ? true : "/guest/onboarding";
    },
  },
};

export default NextAuth(authOptions);
