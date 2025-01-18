import stripe from "@/app/lib/stripe";
import { auth } from "@/app/lib/auth";
import { db } from "@/app/lib/firebase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { metadata, isSubscription } = await req.json();

    if (!metadata || !metadata.profileId || typeof isSubscription !== "boolean") {
      return NextResponse.json(
        { error: "Os campos 'metadata.profileId' e 'isSubscription' são obrigatórios." },
        { status: 400 }
      );
    }

    const price = isSubscription
      ? process.env.STRIPE_SUBSCRIPTION_PRICE_ID
      : process.env.STRIPE_PRICE_ID;

    if (!price) {
      return NextResponse.json(
        {
          error: `Stripe Price ID não configurado para ${isSubscription ? "assinaturas" : "pagamentos únicos"
            }.`
        },
        { status: 500 }
      );
    }

    const userSession = await auth();
    if (!userSession || !userSession.user?.id || !userSession.user?.email) {
      return NextResponse.json({ error: "Usuário não autenticado." }, { status: 401 });
    }

    const userId = userSession.user.id;
    const userEmail = userSession.user.email;
    const userName = userSession.user.name || "Usuário sem nome";

    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();

    let customerId = userDoc.exists ? userDoc.data()?.customerId : null;

    if (!customerId) {
      const newCustomer = await stripe.customers.create({
        email: userEmail,
        name: userName,
        metadata: { userId },
      });

      customerId = newCustomer.id;
      await userRef.set({ customerId }, { merge: true });
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price,
          quantity: 1,
        },
      ],
      mode: isSubscription ? "subscription" : "payment",
      payment_method_types: ["card"],
      success_url: `${req.headers.get("origin")}/${metadata.profileId}`,
      cancel_url: `${req.headers.get("origin")}/${metadata.profileId}/upgrade`,
      metadata,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error: any) {
    console.error("Erro ao criar sessão de checkout:", error.message || error);
    return NextResponse.json(
      { error: error.message || "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
