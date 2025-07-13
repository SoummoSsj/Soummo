import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import { Prisma } from "@prisma/client";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(Prisma),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "database"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        
        }),

    ],
    pages: {
        signIn:"/signin",
    },
}; 