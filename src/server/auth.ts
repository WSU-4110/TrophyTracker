import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { env } from "@/env.cjs";
import connect from "@/db/connect";
import User, { type User as UserType } from "@/db/Models/User";
import getCleanObjectFromObjectOrDocument from "@/utils/cleanObjectDocument";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      person: UserType;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: async ({ session, token }) => {
      const sessionObj = {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
      if (token && session) {
        // @ts-expect-error we know the user exists
        sessionObj.user.person = token.person;
      }
      return Promise.resolve(sessionObj);
    },
    signIn: async ({ user }) => {
      try {
        await connect();
        const updateObj = {
          uid: user.id,
          name: user.name,
          img: user.image,
          email: user.email,
          lastLogin: new Date(),
        };

        await User.updateOne({ uid: user.id }, updateObj, {
          upsert: true,
        });
      } catch (err) {
        console.error("Cannot connect to database...", err);
      }
      return true;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        const db = await connect();
        const userObj = await User.findOne({ uid: token.sub });

        await db.disconnect();
        token.person = {
          ...getCleanObjectFromObjectOrDocument(userObj),
        };
        token.id = user.id;
      }
      return token;
    },
  },
  providers: [
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = async () =>
  await getServerSession(authOptions);
