/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Prioridad: SF Pro -> Sistema Apple -> Fuentes Web anteriores
        heading: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "sans-serif",
        ],
        sub: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Montserrat",
          "sans-serif",
        ],
        body: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Open Sans",
          "sans-serif",
        ],
      },
      colors: {
        // IDENTIDAD DEL CURSO (Institucional)
        sescam: "#469a7c",

        // NUEVA PALETA DE INTERFAZ GENERAL
        ui: {
          main: "#92AEC0", // Azul Grisáceo
          light: "#ABC9E0", // Azul Claro
          bg: "#E6E9F4", // Fondo Lavanda Pálido
          orange: "#F8AF74", // Acento Cálido 1
          yellow: "#FDD776", // Acento Cálido 2
          rose: "#BF838B", // Acento Rosado Oscuro
          pink: "#FFA3C2", // Acento Rosado Claro
        },

        // Mantenemos colores semánticos para lógica
        brand: {
          primary: "#518845",
          dark: "#00695C",
          deep: "#004D40",
          light: "#E0F2F1",
          cyan: "#F5FCFF",
          gray: "#546E7A",
        },
      },
    },
  },
  plugins: [],
};
