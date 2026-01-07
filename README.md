# Shyara Tech Solutions - Company Website

Official website for Shyara Tech Solutions (OPC) Pvt. Ltd. - A modern technology company building digital products that empower businesses.

## About

Shyara Tech Solutions is an India-based technology company focused on creating digital products and services that help businesses grow. We combine design thinking with engineering precision to deliver solutions that work.

### Our Solutions

- **Shyara Marketing**: Digital marketing & growth strategies
- **Shyara Digital**: Digital invitations & event experiences
- **BiteX by Shyara**: Restaurant POS & automation systems

## Tech Stack

This project is built with modern web technologies:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **shadcn-ui** - High-quality component library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Supabase** - Backend services (database & edge functions)
- **Razorpay** - Payment integration

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **bun**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shyarademo/shyara-tech-solutions-pvt-ltd.git
cd shyara-tech-solutions-pvt-ltd
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/      # React components
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   └── ui/         # shadcn-ui components
│   ├── hooks/          # Custom React hooks
│   ├── integrations/   # Third-party integrations (Supabase)
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   └── main.tsx        # Application entry point
├── supabase/
│   └── functions/      # Supabase Edge Functions
└── package.json        # Dependencies and scripts
```

## Features

- 🎨 Modern, responsive design with dark/light theme support
- ⚡ Fast page loads with optimized builds
- 🎭 Smooth animations and transitions
- 📱 Mobile-first responsive design
- 🔍 SEO optimized
- 💳 Payment integration ready (Razorpay)
- 🎯 Type-safe with TypeScript

## Development

### Code Style

- Follow TypeScript best practices
- Use ESLint for code quality
- Follow React best practices and hooks patterns
- Maintain component structure and organization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in `src/components/layout/Navbar.tsx` if needed

## Deployment

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Deploy

You can deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting provider

## Environment Setup

For Supabase Edge Functions (payment integration), ensure you have:

- `RAZORPAY_KEY_ID` - Your Razorpay key ID
- `RAZORPAY_KEY_SECRET` - Your Razorpay key secret

These should be set in your Supabase project's environment variables.

## Contributing

This is a private company project. For internal contributions, please follow the established code review process.

## License

Copyright © Shyara Tech Solutions (OPC) Pvt. Ltd. All rights reserved.

## Contact

- **Website**: https://shyara.co.in
- **Email**: support@shyara.co.in
- **WhatsApp**: +91 9584661610
- **Office**: Bazar Samiti, Patna- 800006, Bihar, India
