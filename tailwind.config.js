/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        // Add your custom gradient name here
        'custom-gradient': ['rgba(81,200,239,1)', 'rgba(122,245,122,1)'],
      },
        fontFamily: {
        Anton: "'Anton', sans-serif",
        Inter: "'Inter', sans-serif",
      },
        fontSize: {
        xs: "14px",
        sm: "16px",
        md: "20px",
        lg: "32px",
        xxl: "72px",
      },
         colors: {
      "black": "#00141B",
        "green": "#7AF57A",
           "dark-gray": "#9898A3",
        
      }
    },
  },
  plugins: [],
};
