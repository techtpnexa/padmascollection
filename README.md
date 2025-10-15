# Padmas Collection

A premium e-commerce website for women's fashion, built with Next.js, TypeScript, and Tailwind CSS in a Turborepo monorepo structure.

## 🌟 Features

- **Premium Design**: Clean, elegant, and modern UI without unnecessary animations
- **Product Catalog**: Browse gowns, lingerie, dresses, and other women's fashion items
- **Product Details**: Detailed product pages with image galleries, size selection, and add to cart
- **Responsive Design**: Optimized for both mobile and desktop experiences
- **Category Filtering**: Filter products by category and sort by various criteria
- **Search & Navigation**: Intuitive navigation with category-based browsing

## 🏗️ Architecture

This project uses a monorepo structure with Turborepo:

```
padmas-collection/
├── apps/
│   ├── web/          # Next.js frontend application
│   └── backend/      # Express.js backend (placeholder)
├── packages/         # Shared packages (future)
└── turbo.json       # Turborepo configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Padmas Collection"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development servers for all apps
- `npm run build` - Build all applications
- `npm run lint` - Run linting across all packages

## 🎨 Design System

### Colors
- **Primary**: Neutral grays for elegance
- **Accent**: Pink tones for feminine touch
- **Typography**: Inter for body text, Playfair Display for headings

### Components
- Clean, minimal design without border radius
- Subtle hover effects on images and buttons
- Consistent spacing and typography
- Premium feel with ample whitespace

## 📱 Pages

### Home Page (`/`)
- Hero section with brand messaging
- Category showcase
- Featured products grid
- Newsletter signup

### Products Page (`/products`)
- Product grid with filtering and sorting
- Category-based filtering
- Price range filters
- Responsive grid layout

### Product Details (`/product/[id]`)
- Large product image gallery
- Product information and pricing
- Size and color selection
- Add to cart functionality
- Related products section

## 🔮 Future Enhancements

### Authentication
- Google OAuth integration (structure prepared)
- User accounts and profiles
- Order history

### E-commerce Features
- Shopping cart functionality
- Checkout process
- Payment integration
- Order management

### Backend API
- Product management
- User authentication
- Order processing
- Inventory management

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Backend (Placeholder)
- **Express.js** - Node.js web framework
- **TypeScript** - Type safety
- **CORS & Helmet** - Security middleware

### Development
- **Turborepo** - Monorepo management
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📝 Project Structure

```
apps/web/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── products/       # Products listing
│   └── product/[id]/   # Product details
├── components/
│   ├── layout/         # Layout components
│   ├── product/        # Product-related components
│   ├── ui/            # Reusable UI components
│   └── auth/          # Authentication components (placeholder)
├── data/              # Mock data and constants
├── lib/               # Utility functions
└── types/             # TypeScript type definitions
```

## 🎯 Design Principles

1. **Elegance First**: Clean, sophisticated design that reflects premium fashion
2. **Performance**: Fast loading times and smooth interactions
3. **Accessibility**: Inclusive design for all users
4. **Mobile-First**: Responsive design optimized for all devices
5. **Minimal Animations**: Subtle effects that enhance rather than distract

## 📄 License

This project is private and proprietary to Padmas Collection.

---

Built with ❤️ for premium women's fashion


