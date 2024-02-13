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
        'hero': "url('/assets/images/background/hero.png')",
        'jackpot': "url('/assets/images/background/jackportBg.png')",
        'kasinoNight': "url('/assets/images/background/slots.png')",
        'luxury': "url('/assets/images/background/slots.png')",
        'lanza': "url('/assets/images/background/Luxury.png')",
        'propiaLanza': "url('/assets/images/background/FinalCta.png')",
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
