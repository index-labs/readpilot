import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "whop",
      name: "Whop",
      type: "oauth" as const,
      authorization: "https://whop.com/oauth",
      token: "https://data.whop.com/api/v3/oauth/token",
      userinfo: "https://data.whop.com/api/v2/me",
      clientId: process.env.NEXT_PUBLIC_WHOP_CLIENT_ID,
      clientSecret: process.env.WHOP_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
      profile(profile: {
        id: string;
        username: string;
        email: string;
        profile_pic_url: string;
      }) {
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.profile_pic_url,
        };
      },
    },
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.user.id = token.id as string;
      session.accessToken = token.accessToken as string;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};