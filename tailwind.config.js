/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'left-image': "url('/shape_1.png')",
        'right-image': "url('/shape_2.png')",

      },

      
      colors: {
        textcol: "#000000",
        navcol: "#5A6675",
        col: "#101010",
        btnblack: "#0B0B0B",
        secyellow: "#FDCA09",
        priyellow: "#FEC00A",
      },
    },
  },
  plugins: [
   

     
  ],
};
