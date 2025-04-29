"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

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
      <div className="p-4 border rounded">
        <CardElement />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Processing..." : `Pay $${bookingData.fees}`}
      </button>
    </form>
  );
}

export default function PaymentPageClient() {
  const searchParams = useSearchParams();
  const [clientSecret, setClientSecret] = useState("");

  const bookingData = {
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
    doctor: searchParams.get("doctor") || "",
    department: searchParams.get("department") || "",
    speciality: searchParams.get("speciality") || "",
    date: searchParams.get("date") || "",
    time: searchParams.get("time") || "",
    payment: searchParams.get("payment") || "",
    fees: searchParams.get("fees") || "500",
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
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Payment Details</h2>
      <p>Patient: {bookingData.name}</p>
      <p>Email: {bookingData.email}</p>
      <p>Amount: ${bookingData.fees}</p>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} bookingData={bookingData} />
        </Elements>
      ) : (
        <p>Loading payment form...</p>
      )}
    </div>
  );
}
