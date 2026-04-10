import type { Config } from 'tailwindcss';

/**
 * Tailwind v4 uses CSS-first configuration in src/index.css (@theme, :root).
 * This file documents the content paths and can be extended with plugins if needed.
 */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
} satisfies Config;
