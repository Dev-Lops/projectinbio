import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
};

initializeApp(firebaseConfig);

const db = getFirestore();

async function testFirestore() {
  try {
    const testDoc = await db.collection("test").doc("testDoc").set({ message: "Hello, Firestore!" });
    console.log("Firestore funcionando!", testDoc);
  } catch (error) {
    console.error("Erro no Firestore:", error);
  }
}

testFirestore();
