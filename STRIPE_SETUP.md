# Stripe Payment Integration Setup

This guide will help you set up Stripe payment processing for the SEMRUSH website.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Node.js and npm installed
3. Environment variables configured

## Setup Steps

### 1. Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** > **API keys**
3. Copy your **Publishable key** and **Secret key**
   - Use test keys for development
   - Use live keys for production

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Stripe keys to `.env.local`:
   ```
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

### 3. Create Stripe Products and Prices

1. In Stripe Dashboard, go to **Products**
2. Create products for each plan:
   - **Pro Plan** (Monthly and Yearly)
   - **Guru Plan** (Monthly and Yearly)
   - **Business Plan** (Monthly and Yearly)

3. For each product, create prices:
   - Set the price amount (e.g., $119.95 = 11995 cents)
   - Set billing period (monthly or yearly)
   - Set as recurring subscription

4. Copy the Price IDs and update them in `src/app/api/checkout/route.ts`:
   ```typescript
   const plans = {
     pro: {
       monthly: { priceId: 'price_xxxxx', amount: 11995 },
       yearly: { priceId: 'price_xxxxx', amount: 119950 },
     },
     // ... etc
   };
   ```

### 4. Update Checkout API Route

Uncomment the Stripe code in `src/app/api/checkout/route.ts`:

```typescript
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

// In the POST function, replace the mock response with:
const session = await stripe.checkout.sessions.create({
  payment_method_types: ['card'],
  line_items: [
    {
      price: selectedPlan.priceId,
      quantity: 1,
    },
  ],
  mode: 'subscription',
  success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
  cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
  customer_email: email,
  metadata: {
    planId,
    billingCycle,
  },
});

return NextResponse.json({ sessionId: session.id, url: session.url });
```

### 5. Configure Webhooks (Optional but Recommended)

1. In Stripe Dashboard, go to **Developers** > **Webhooks**
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. Copy the webhook signing secret

5. Create webhook handler at `src/app/api/webhooks/stripe/route.ts`:
   ```typescript
   import { NextRequest, NextResponse } from 'next/server';
   import Stripe from 'stripe';

   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
   const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

   export async function POST(req: NextRequest) {
     const body = await req.text();
     const signature = req.headers.get('stripe-signature')!;

     let event: Stripe.Event;
     try {
       event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
     } catch (err) {
       return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
     }

     // Handle the event
     switch (event.type) {
       case 'checkout.session.completed':
         // Handle successful payment
         break;
       case 'customer.subscription.created':
         // Handle new subscription
         break;
       // ... handle other events
     }

     return NextResponse.json({ received: true });
   }
   ```

### 6. Test the Integration

1. Use Stripe test cards:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - Use any future expiry date and any CVC

2. Test the checkout flow:
   - Go to `/pricing`
   - Select a plan
   - Click "Start Free Trial"
   - Complete the test payment

### 7. Go Live

1. Switch to live mode in Stripe Dashboard
2. Update environment variables with live keys
3. Update `NEXT_PUBLIC_BASE_URL` to your production domain
4. Test with real payment methods

## Supported Payment Methods

Stripe supports:
- Credit/Debit cards (Visa, Mastercard, American Express, etc.)
- Digital wallets (Apple Pay, Google Pay)
- Bank transfers (for annual plans)
- PayPal (via Stripe)
- And 100+ other payment methods globally

## Security Notes

- Never commit `.env.local` to version control
- Always use HTTPS in production
- Validate webhook signatures
- Use Stripe's test mode during development
- Monitor your Stripe Dashboard for suspicious activity

## Support

For issues or questions:
- Stripe Documentation: https://stripe.com/docs
- Stripe Support: https://support.stripe.com
- Contact: visionfish@outlook.com

