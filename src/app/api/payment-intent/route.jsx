// app/api/payment-intent/route.js
// import Stripe from 'stripe';
// import { Stripe } from 'stripe';

const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const body = await req.json();
  const { amount } = body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
