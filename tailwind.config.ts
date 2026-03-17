import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        court: {
          bg: '#0F1021',
          panel: '#1D1E35',
          text: '#FDF8E7',
          accent: '#FF4D8D',
          juror: '#2DD4BF',
          judge: '#A78BFA',
          prosecutor: '#FB7185',
          defense: '#60A5FA',
          spectator: '#F59E0B',
        },
      },
      boxShadow: {
        glam: '0 10px 30px rgba(255, 77, 141, 0.25)',
      },
      backgroundImage: {
        halo: 'radial-gradient(circle at top, rgba(255,77,141,0.2), transparent 55%)',
      },
    },
  },
  plugins: [],
};

export default config;
