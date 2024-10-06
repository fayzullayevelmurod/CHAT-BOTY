/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['"Manrope"'],
        Onest: ['"Onest"'],
        Gilroy: ['"Gilroy"'],
        IgraSans: ['"Igra Sans"'],
      },
      colors: {
        "black": "#000000",
        "accent": "#FFCC00",
        "secondary": "#525050",
        "bg-color": "#F2F2F2",
        "card-bg": "#F3F3F380",
      },
      padding: {
        '17': '4.375rem',
      }
    },
  },
  plugins: [],
}

