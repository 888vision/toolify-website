import { NextRequest, NextResponse } from 'next/server';

// Stripe integration
// Uncomment the following lines and install stripe package:
// npm install stripe
// Then uncomment the import and initialization:
/*
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});
*/

const plans = {
  pro: {
    monthly: { priceId: 'price_pro_monthly', amount: 11995 }, // Amount in cents
    yearly: { priceId: 'price_pro_yearly', amount: 119950 },
  },
  guru: {
    monthly: { priceId: 'price_guru_monthly', amount: 22995 },
    yearly: { priceId: 'price_guru_yearly', amount: 229950 },
  },
  business: {
    monthly: { priceId: 'price_business_monthly', amount: 44995 },
    yearly: { priceId: 'price_business_yearly', amount: 449950 },
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, billingCycle, email } = body;

    if (!planId || !billingCycle) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const plan = plans[planId as keyof typeof plans];
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid plan' },
        { status: 400 }
      );
    }

    const selectedPlan = plan[billingCycle as 'monthly' | 'yearly'];
    if (!selectedPlan) {
      return NextResponse.json(
        { error: 'Invalid billing cycle' },
        { status: 400 }
      );
    }

    // In production, you would create a Stripe Checkout Session here:
    /*
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: selectedPlan.priceId,
          quantity: 1,
        },
      ],
      mode: billingCycle === 'monthly' ? 'subscription' : 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      customer_email: email,
      metadata: {
        planId,
        billingCycle,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
    */

    // For now, return a mock response
    // In production, replace this with actual Stripe integration
    return NextResponse.json({
      message: 'Checkout session created',
      planId,
      billingCycle,
      amount: selectedPlan.amount / 100, // Convert cents to dollars
      // In production, you would return: { sessionId, url }
      url: `/checkout-success?plan=${planId}&billing=${billingCycle}`,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

