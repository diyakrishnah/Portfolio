/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { fontFamily: { display: ['Space Grotesk', 'sans-serif'], mono: ['DM Mono', 'monospace'] }, colors: { ink: '#080812', panel: '#11111f', neon: '#b6ff4a', violet: '#a78bfa', cyan: '#51e5ff' } } },
  plugins: []
}
