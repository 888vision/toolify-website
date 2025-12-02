# SEMRUSH Global SEO Suite

A premium, high-end website showcasing SEMRUSH - the all-in-one SEO platform for global brands. This website features modern design, payment integration, and is built to serve customers worldwide.

## 🌟 Features

- **Premium Design**: Modern, high-end UI with gradient effects and smooth animations
- **Payment Integration**: Stripe payment processing for global transactions
- **Responsive Design**: Fully responsive, works perfectly on all devices
- **SEO Optimized**: Complete SEO metadata and optimization
- **Global Ready**: Multi-language support ready, international payment methods

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
cd D:\Projects\website-clone
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Stripe keys:
```
STRIPE_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
website-clone/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page with hero, features, testimonials
│   │   ├── pricing/
│   │   │   └── page.tsx         # Pricing page with plans
│   │   ├── checkout-success/
│   │   │   └── page.tsx         # Payment success page
│   │   ├── api/
│   │   │   └── checkout/
│   │   │       └── route.ts     # Stripe checkout API
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Header.tsx           # Navigation header
│       ├── Footer.tsx           # Footer component
│       └── MobileMenu.tsx       # Mobile navigation
├── STRIPE_SETUP.md              # Stripe integration guide
└── README_SEMRUSH.md            # This file
```

## 💳 Payment Setup

The website includes Stripe payment integration. To enable payments:

1. Follow the instructions in `STRIPE_SETUP.md`
2. Create products and prices in Stripe Dashboard
3. Update the price IDs in `src/app/api/checkout/route.ts`
4. Uncomment the Stripe code in the checkout route

See `STRIPE_SETUP.md` for detailed instructions.

## 🎨 Design Features

- **Gradient Hero Section**: Eye-catching hero with animated background
- **Feature Cards**: Clean, modern feature showcase
- **Testimonials**: Social proof section
- **Pricing Cards**: Clear pricing with popular plan highlighting
- **Smooth Animations**: Hover effects and transitions throughout
- **Mobile Optimized**: Perfect experience on all screen sizes

## 🌍 Global Features

- **International Payment Methods**: Stripe supports 100+ payment methods
- **Multi-currency Ready**: Can be configured for different currencies
- **SEO Optimized**: Complete metadata for search engines
- **Fast Loading**: Optimized for performance worldwide

## 📱 Pages

- **Home** (`/`): Main landing page with hero, features, testimonials, and CTA
- **Pricing** (`/pricing`): Pricing plans with monthly/yearly toggle
- **Checkout Success** (`/checkout-success`): Payment confirmation page

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Payments**: Stripe
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 📝 Environment Variables

Required environment variables:

- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `NEXT_PUBLIC_BASE_URL`: Your website URL (for redirects)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## 📧 Contact

- Email: visionfish@outlook.com
- Phone: +852-5749 5090

## 📄 License

Copyright © 2025 SEMRUSH Global. All rights reserved.

---

**Built with ❤️ for global SEO professionals**

