/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.tsx",
    "./src/**/*.{ts,tsx}", // Adicione outras pastas, conforme sua estrutura
    "./src/screens/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

