/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1620',
        panel: '#161F2C',
        hairline: '#26313F',
        mist: '#8593A1',
        chalk: '#E9EDF1',
        amber: '#E8A33D',
        teal: '#4FB4A8'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    }
  },
  daisyui: {
    themes: [
      {
        panelroom: {
          primary: '#E8A33D',
          secondary: '#4FB4A8',
          accent: '#E8A33D',
          neutral: '#161F2C',
          'base-100': '#0F1620',
          'base-200': '#161F2C',
          'base-300': '#26313F',
          info: '#4FB4A8',
          success: '#4FB4A8',
          warning: '#E8A33D',
          error: '#E0655B'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
