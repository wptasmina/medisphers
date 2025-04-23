"use client"; // <-- 👈 required for client hooks like useSearchParams

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm({ clientSecret, bookingData }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    setLoading(false);

    if (result.error) {
      alert(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      alert("Payment successful!");

      // Save booking to MongoDB
      await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border rounded-md bg-white shadow-sm">
        <CardElement />
      </div>
      <Button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : `Pay $${bookingData.fees || 500}`}
      </Button>
    </form>
  );
}

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState("");
  const searchParams = useSearchParams();

  const bookingData = {
    name: searchParams.get("name"),
    email: searchParams.get("email"),
    doctor: searchParams.get("doctor"),
    department: searchParams.get("department"),
    speciality: searchParams.get("speciality"),
    date: searchParams.get("date"),
    time: searchParams.get("time"),
    payment: searchParams.get("payment"),
    fees: searchParams.get("fees") || "500", // fallback fee
  };

  useEffect(() => {
    const amount = parseInt(bookingData.fees) * 100;
    fetch("/api/payment-intent", {
      method: "POST",
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [bookingData.fees]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">Pay for Appointment</h2>
          <p className="text-sm mb-2">Patient: {bookingData.name}</p>
          <p className="text-sm mb-2">Email: {bookingData.email}</p>
          <p className="text-sm mb-4">Amount: ${bookingData.fees}</p>

          {clientSecret ? (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm clientSecret={clientSecret} bookingData={bookingData} />
            </Elements>
          ) : (
            <p>Loading payment form...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
