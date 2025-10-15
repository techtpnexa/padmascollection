/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Exact colors from your palette
        'soft-pink': '#F8D8E0',      // Soft Pink (Background)
        'muted-rose': '#D49AAE',     // Muted Rose (Outer Border)
        'light-blush': '#F4C8D2',    // Light Blush (Content Section)
        'deep-mauve': '#3B2C2E',     // Deep Mauve (Text)
        'warm-pink': '#E9A7B5',      // Warm Pink (Image Accent)
        'neutral-white': '#FDF7F9',  // Neutral White Tint (Highlights)
        
        // Extended palette for variations
        primary: {
          50: '#FDF7F9',   // Neutral White Tint (Highlights)
          100: '#F8D8E0',  // Soft Pink (Background)
          200: '#F4C8D2',  // Light Blush (Content Section)
          300: '#E9A7B5',  // Warm Pink (Image Accent)
          400: '#E0A0B0',  // Slightly darker warm pink
          500: '#D49AAE',  // Muted Rose (Outer Border)
          600: '#C890A8',  // Darker muted rose
          700: '#B87A95',  // Even darker rose
          800: '#A06B85',  // Deep rose
          900: '#3B2C2E',  // Deep Mauve (Text)
        },
        accent: {
          50: '#FDF7F9',   // Neutral White Tint
          100: '#F8D8E0',  // Soft Pink
          200: '#F4C8D2',  // Light Blush
          300: '#E9A7B5',  // Warm Pink
          400: '#D49AAE',  // Muted Rose
          500: '#C28AA0',  // Medium Rose
          600: '#B07A91',  // Deeper Rose
          700: '#9D6A7F',  // Dark Rose
          800: '#6B4E59',  // Deep Mauve Tint
          900: '#3B2C2E',  // Deep Mauve (Text)
        },
        text: {
          primary: '#3B2C2E',    // Deep Mauve for main text
          secondary: '#6B4E59',  // Lighter mauve for secondary text
          light: '#9D6A7F',      // Even lighter for subtle text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
