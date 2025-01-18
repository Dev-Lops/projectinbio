import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";
import 'server-only'

export const firebaseCert = cert({
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
})

if (!getApps().length) {
  initializeApp({
    credential: firebaseCert,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}
export const db = getFirestore();

export const storage = getStorage().bucket(process.env.FIREBASE_STORAGE_BUCKET);

export async function getDownloadURLFromPath(path?: string) {
  if (!path) return;
  const file = storage.file(path);
  const [url] = await file.getSignedUrl({
    action: "read",
    expires: "03-01-2500", // Não deixa expirar
  });
  return url;
}
