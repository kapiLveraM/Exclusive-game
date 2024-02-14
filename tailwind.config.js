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
        'hero': "url('/assets/images/background/Hero.webp')",
        'jackpot': "url('/assets/images/background/Jackport.webp')",
        'kasinoNight': "url('/assets/images/background/Slots.webp')",
        'luxury': "url('/assets/images/background/Slots.webp')",
        'lanza': "url('/assets/images/background/Luxury.webp')",
        'propiaLanza': "url('/assets/images/background/FinalCta.webp')",
      },

      
        fontFamily: {
        Anton: "'Anton', sans-serif",
        Inter: "'Inter', sans-serif",
      },
        fontSize: {
        md: "20px",
          lg: "32px",
        
        xxl: "72px",
      },
      colors: {
        lightSky: "#51C8EF",
        lightGreen: "#7af571",
        Menthol: "#b5ffb574",
        lightSilver: "#80898D",
        EerieBlack: "#191919",
        MagentaYellow: "#FFFFFF80",
        Himalaya: "#367E6D",
        CornflowerBlue: "#67E0B0",
      MauveSeductress:"#FFFFFF1A",
      darkBlack: "#00141B",
        green: "#7AF57A",
           "dark-gray": "#9898A3",
        
      }
    },
  },
  plugins: [],
};
