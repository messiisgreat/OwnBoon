/**@type {import('@types/tailwindcss/tailwind-config').TailwindConfig}*/
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
  theme: {
    extend: {},
  },
};
