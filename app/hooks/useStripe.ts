import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!);
export function useStripe() {
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    async function loadStripeAsync() {
      try {
        const stripeInstance = await loadStripe(
          process.env.NEXT_PUBLIC_STRIPE_PUB_KEY!
        );
        setStripe(stripeInstance);
      } catch (error) {
        console.error("Erro ao carregar Stripe.js:", error);
      }
    }

    loadStripeAsync();
  }, []);

  async function createStripeCheckout({
    metadata,
    isSubscription,
  }: {
    metadata: any;
    isSubscription: boolean;
  }) {
    try {
      console.log("Enviando dados para o backend:", { metadata, isSubscription });

      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ metadata, isSubscription }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro desconhecido no servidor");
      }

      const { sessionId } = await response.json();
      console.log("Session ID recebido:", sessionId);

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Falha ao carregar o Stripe.js");
      }

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Erro ao criar sessão de checkout:", error);
    }
  }



  async function handleCreateStripePortal() {
    try {
      const response = await fetch("/api/stripe/create-portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao acessar o portal do Stripe");
      }

      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Erro ao redirecionar para o portal do Stripe:", error);
    }
  }

  return { createStripeCheckout, handleCreateStripePortal };
}
