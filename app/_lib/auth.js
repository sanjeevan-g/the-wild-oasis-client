import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth?.user;
    },
    // has to return true/false
    async signIn({ user, account, profile }) {
      try {
        // gets null when new user signin
        const existingUser = await getGuest(user.email);

        if (!existingUser) {
          await createGuest({ email: user.email, fullName: user.name });
        }

        return true;
      } catch (error) {
        return false;
      }
    },

    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;

      // we will get this session data in auth()
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authConfig);
