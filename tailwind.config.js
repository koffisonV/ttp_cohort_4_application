/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",  // Includes HTML, JS, and JSX files
    "./src/components/**/*.{js,jsx}", // Targets files in the components folder
    "./public/index.html" // Includes the main HTML file if you have any styles there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
