/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{inc,html}",
  ],
  theme: {
    extend: {
      borderRadius:{
        '5': '0.313rem',
        '30': '1.875rem',
        '50': '3.125rem',
      },
      colors:{
        neutral:{
          "white:": "#FFFFFF",
          "black": "#000000",
        }, 

        nav:{
          "blue": "#0970E6",
          "blue-hover": "#0863CC",
        },

        panier:{
          "very-light-red": "#FFEFEF",
          "very-light-yellow": "#FFF7F0",
          "black": "#121212",
          "red-text": "#AA0D11",
          "red": "#D30D1F",
          "red-hover": "#BA0B1B",
          "grey": "#696969",
        },
        
        menu:{
          "background-light": "#F6F6F6",
          "promotion-red-background": "#FFEFEF",
          "promotion-red": "#D30D1F",
          "hover-blue": "#F5FAFF",
        },

        assistant:{
          "black": "#121212",
          "black-hover": "#2B2B2B",
        },

        produit:{
          "paiemet": "#F5FBFF",
          "black": "#000000",
          "note": "#F5FAFF",
        },

        star:{
          "orange": "#FFB300",
        }
      },

      inset: {
        '9': '9px',
        '11': '11px',
      },

      width:{
        /*Taille pour les icônes des catégories*/
        '77': "4.813rem",

        /*Taille pour les icônes des listes du menu*/
        '23': "1.438rem",

        /*Taille d'une image dans la page Produit*/
        "700": "700px",
      },

      maxWidth:{
        "315": "315px",
      },

      height:{
        /*Taille pour les icônes des catégories*/
        '77': "4.813rem",

        /*Taille pour les icônes des listes du menu*/
        '23': "1.438rem",

        /*Taille d'une image dans la page Produit*/
        "700": "700px",


      },

      padding: {
        '4': '0.250rem',
        '5': '0.313rem',
        '7': '0.438rem',
        '8': '0.500rem',
        '9': '0.563rem',
        '10': '0.625rem',
        '11': '0.688rem',
        '12': '0.750rem',
        '13': '0.813rem',
        '15': '0.938rem',
        '16': '1rem',
        '17': '1.063rem',
        '19': '1.188rem',
        '20': '1.250rem',
        '29': '1.813rem',
        '39': '2.438rem',
        '40': '2.500rem',
        '60': '3.750rem',
        '65': '4.063rem',
        '300': '18.750rem',
      },

      gap:{
        '10': '0.625rem',
        '15': '0.938rem',
        '24': '1.500rem',
        '29': '1.813rem',
      },

      fontSize:{
        '14': '0.875rem',
        '15': '0.938rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.250rem',
      },

      fontWeight:{
        "200": "200",
        "300": "300",
        "400": "400",
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
        "900": "900",
      },
      height: {
        'rem20':'20rem',
        'rem30':'30rem',
        'rem40':'40rem',
    },
    width: {
      'rem20':'20rem',
      'rem30':'30rem',
      'rem40':'40rem',
      'rem50':'50rem',
  },



    },
  },
  plugins: [],
}

