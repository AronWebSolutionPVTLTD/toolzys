/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      height: {
        '29px': '29px',
        '39px': '39px',
        '67px': '67px',
      },
      width: {
        '29px': '29px',
        '36px': '36px',
        '71px': '71px',
      },
      colors: {
        'logo-icon-bg':"#DB557D",
        'primary-color': '#B5224E',
        'body-primary-color': '#1B1C1E',
        'highlight-color': '#38D003',
        'grey-color':"#808080",
        'dark-grey-color':"#646464",
        'dark-grey-color-2':"#B9B4B4",
        'red-color':"#DE1010",
        'red-color-1':"#FA0404",
        'dark-red-color':"#660925",
        'green-bg':"#03C1C1",
        
      },
      padding: {
        '34px': '34px',
      },
      lineHeight: {
        "35px":"35px",
        "39px":"39px",
        "48px":"48px",
        "58px":"58px",
        "54px":"54px",
        "70px":"70px",
      },
      maxWidth: {
        "200px":"200px",
        "215px":"215px",
        "285px":"285px",
        "547px":"547px",
        "820px":"820px",
        "920px":"920px",
        "930px":"930px",
        "1165px":"1165px",
        "1265px":"1265px",
      },
      fontSize: { 
        "19px":"19px",
        "26px":"26px",
        "32px":"32px",
      },
      minWidth:{
        "300px":"300px",
        "247px":"247px"
      },
      minHeight: {
        '46px': '46px',
        '58px': '58px',
        '74px': '74px',
        '70vh': '70vh',
        '80vh': '80vh',
      },
      zIndex:{
          "1":"1",
      },
      margin: {
        '1px': '1px',
      },
      borderRadius: {
        "20px":"20px",
        "30px":"30px",
      }
    },
  },
  plugins: [],
}
