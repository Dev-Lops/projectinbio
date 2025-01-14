import { FirestoreAdapter } from "@auth/firebase-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { firebaseCert } from "./firebase";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert,
  }) as any, // Forçando o tipo any para resolver o erro de tipagem
  providers: [Google],
  events: {},
  callbacks: {},

})