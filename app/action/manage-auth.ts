'use server'

import { auth, signIn, signOut } from "@/app/lib/auth";

export async function manageAuth() {
  const session = await auth()
  if (!session) {
    await signIn("google", {
      redirectTo: "/criar"
    })
  } else {
    await signOut({
      redirectTo: "/"
    })
  }
}


