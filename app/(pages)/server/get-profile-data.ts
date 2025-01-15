import { db } from '@/app/lib/firebase'
import 'server-only'

type ProfileData = {
  userId: string
  totalVisits: string
  createdAt: number
}

export async function getProfileData(profileId: string): Promise<ProfileData> {
  const snapshot = await db.collection('profiles').doc(profileId).get()
  return snapshot.data() as ProfileData
}
