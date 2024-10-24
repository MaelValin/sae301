/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./inscription.html",
    "./connexion.html",
    "./src/**/*.{inc,html}",
  ],
  theme: {
    extend: {
      borderRadius:{
        '3': '0.188rem',
        '5': '0.313rem',
        '8': '0.500rem',
        '10': '0.625rem',
        '25': '1.563rem',
        '30': '1.875rem',
        '50': '3.125rem',
      },
      boxShadow: {
        'card': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', 
        "categorie": '0px 4px 4px 4px rgba(0, 0, 0, 0.25)', 
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

        accueil:{
          "green": "#358478",
          "very-pale-blue": "#f5fbff",
          "grey": "#C7C7C7",
          "grey-hover": "#EDEDED",
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

        /*Taille d'une actualité*/
        "302": "302px",
        "309": "309px",

        /*Taille d'une image dans la page Produit*/
        "700": "700px",

        '98': '6.125rem',

        '418': '418px', 

        'rem20':'20rem',
        'rem30':'30rem',
        'rem40':'40rem',
        'rem50':'50rem',
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

        'rem20':'20rem',
        'rem30':'30rem',
        'rem40':'40rem',

      },

      padding: {
        '4': '0.250rem',
        '5': '0.313rem',
        '6': '0.375rem',
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
        '18': '1.125rem',
        '19': '1.188rem',
        '20': '1.250rem',
        '25': '1.563rem',
        '29': '1.813rem',
        '30': '1.875rem',
        '32': '2rem',
        '39': '2.438rem',
        '40': '2.500rem',
        '45': '2.813rem',
        '60': '3.750rem',
        '65': '4.063rem',
        '70': '4.375rem',
        '100': '6.250rem',
        '300': '18.750rem',
      },

      gap:{
        '4': '0.25rem',
        '6': '0.375rem',
        '7': '0.438rem',
        '8': '0.5rem',
        '10': '0.625rem',
        '11': '0.688rem',
        '14': '0.875rem',
        '15': '0.938rem',
        '16': '1rem',
        '17': '1.063rem',
        '20': '1.250rem',
        '24': '1.500rem',
        '25':  '1.563rem',
        '27': '1.688rem',
        '29': '1.813rem',
        '30': '1.875rem',
        '40': '2.500rem',
        '50': '3.125rem',
        '100': '6.250rem',
      },

      fontSize:{
        '13': '0.813rem',
        '14': '0.875rem',
        '15': '0.938rem',
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.250rem',
        '24': '1.500rem',
        '28': '1.750rem',
        '32': '2rem',
        '36': '2.250rem',
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
    },
    },
  plugins: [],
}

