import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import prismadb from "@/lib/prismadb";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string
      })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await prismadb.user.findUnique({
          where: { email: user.email as string },
        });
        if (dbUser) {
          token.id = dbUser.id; // This will be the UUID from your DB
        } else {
          token.id = user.id?.toString(); // Fallback if not found, though this shouldn't happen
        }
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email;
      return session;
    },
    async signIn({ account, profile }) {  // eslint-disable-line @typescript-eslint/no-unused-vars
      if (!profile?.email) {
        throw new Error("Email is required");
      }

      // Try to find the user by email.
      let user = await prismadb.user.findUnique({
        where: {
          email: profile.email,
        },
      });

      if (!user) {
        // **Sign Up Functionality:**  
        // If the user does not exist, create a new record.
        user = await prismadb.user.create({
          data: {
            email: profile.email,
            name: profile.name as string,
            // Optionally, add image or any other fields:
            // image: profile.image as string,
          },
        });
      } else {
        // Optionally update the user's data (like name) on every sign in.
        await prismadb.user.update({
          where: {
            email: user.email,
          },
          data: {
            name: profile.name as string,
            // image: profile.image as string,
          },
        });
      }
      return true;
    },
  },
  pages: {
    signIn: "/sign-in", // this is where your sign-in page lives
    newUser: "/sign-up",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
