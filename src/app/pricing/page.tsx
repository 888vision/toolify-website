'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'pro',
      name: 'Pro',
      description: 'Perfect for freelancers and small teams',
      monthlyPrice: 119.95,
      yearlyPrice: 119.95,
      yearlyDiscount: 0,
      features: [
        '10 projects',
        '5,000 keywords to track',
        '500 pages to audit',
        '50,000 backlinks to analyze',
        'Daily reports',
        'Email support',
      ],
      popular: false,
    },
    {
      id: 'guru',
      name: 'Guru',
      description: 'Ideal for growing businesses and agencies',
      monthlyPrice: 229.95,
      yearlyPrice: 229.95,
      yearlyDiscount: 0,
      features: [
        '50 projects',
        '15,000 keywords to track',
        '5,000 pages to audit',
        '200,000 backlinks to analyze',
        'Historical data (3 years)',
        'Priority support',
        'Content marketing toolkit',
      ],
      popular: true,
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For large enterprises and agencies',
      monthlyPrice: 449.95,
      yearlyPrice: 449.95,
      yearlyDiscount: 0,
      features: [
        'Unlimited projects',
        '50,000 keywords to track',
        '10,000 pages to audit',
        '500,000 backlinks to analyze',
        'Historical data (5 years)',
        'Dedicated account manager',
        'API access',
        'White-label reports',
      ],
      popular: false,
    },
  ];

  const handleCheckout = async (planId: string) => {
    setSelectedPlan(planId);
    const plan = plans.find(p => p.id === planId);
    if (!plan) return;

    try {
      // Call the checkout API
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          billingCycle,
          email: '', // In production, get this from user input
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to checkout success page
        window.location.href = data.url;
      } else if (data.sessionId) {
        // In production with Stripe, you would redirect to Stripe Checkout:
        // window.location.href = data.url;
        alert(`Checkout session created. In production, this would redirect to Stripe Checkout.`);
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to initiate checkout. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header - Premium Red Theme */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-rose-900 text-white py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/20 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
          <div className="inline-block px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-sm font-semibold">PREMIUM PLANS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Choose Your Plan
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  billingCycle === 'yearly' ? 'transform translate-x-6' : ''
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                Save up to 17%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
              const displayPrice = billingCycle === 'yearly' ? price * 12 : price;
              
              return (
                <div
                  key={plan.id}
                  className={`relative p-8 rounded-2xl border-2 transition-all ${
                    plan.popular
                      ? 'bg-white border-blue-500 shadow-2xl scale-105 md:scale-110'
                      : 'bg-white border-gray-200 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white rounded-full text-sm font-black shadow-xl">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-extrabold text-gray-900">${price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-gray-500">
                        Billed ${displayPrice.toFixed(2)} annually
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleCheckout(plan.id)}
                    className={`w-full py-4 rounded-xl font-black text-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 text-white hover:from-red-700 hover:via-rose-700 hover:to-pink-700 shadow-xl hover:shadow-2xl'
                        : 'bg-gradient-to-r from-red-700 to-rose-700 text-white hover:from-red-800 hover:to-rose-800 shadow-lg hover:shadow-xl'
                    } transform hover:scale-105 active:scale-95`}
                  >
                    Start Free Trial
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans.',
              },
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 14-day free trial with no credit card required. If you\'re not satisfied within the first 30 days of a paid subscription, we offer a full refund.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No, there are no setup fees or hidden charges. You only pay the monthly or annual subscription fee.',
              },
              {
                q: 'Do you offer discounts for annual plans?',
                a: 'Yes! Annual plans save you up to 17% compared to monthly billing.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Red Theme */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-red-900 via-red-800 to-rose-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/20 rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Still Have Questions?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 font-light">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="mailto:visionfish@outlook.com"
              className="px-8 py-4 bg-white text-red-700 rounded-xl font-black text-lg hover:bg-red-50 transition-all shadow-2xl hover:shadow-red-500/50 transform hover:scale-105"
            >
              Contact Sales
            </a>
            <Link
              href="/"
              className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-xl font-black text-lg hover:bg-white/20 hover:border-white/50 transition-all shadow-xl"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

