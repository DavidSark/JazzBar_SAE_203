module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width: {

      },

      screens: {
        'ipad_mini': '744px',
        'ipad_pro': '1024px',
        'desktop': '1440px',
      },

      backgroundImage: {
        'imageFond': "url('/img/image_accueil.png')",
        'imageOpen': "url('/img/open.jpg')"
      },

      "colors": {
        "Noir_pur": "#000000",
        "Magenta_rose": "#e6007e",
        "Blanc": "#ffffff",
        "Gris": "#bebebe",
        "gris_foncé": "#525252",
        "gris_plus_foncé": "#404040",
        "Gris_fond_pied_de_page": "#2E2E2E",
        "Magenta_transparent": "#e6007e",
        "Violet_transparent": "#770096",
        "Bleu_transparent": "#2e3169",
        "Jaune_orange transparent": "#6a4806",
        "Noir_transparent": "#000000"
      },
      "fontFamily": {
        "fontFamily": {
          "roboto": "Roboto"
        },
      },

      "fontSize": {
        "sm": "0.8125rem",
        "base": "1rem",
        "lg": "1.5rem",
        "xl": "2.25rem"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.16962891817092896rem",
        "sm": "0.25rem",
        "default": "0.3125rem",
        "lg": "1rem",
        "xl": "2.1875rem",
        "2xl": "5.0888671875rem",
        "full": "9999px"
      }
    },

  },
  plugins: [],
}
