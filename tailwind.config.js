/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        sub: ['Montserrat', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          primary: '#3B8A3B', 
          dark: '#00695C',    
          deep: '#004D40',    
          light: '#E0F2F1',   
          cyan: '#F5FCFF',    
          gray: '#546E7A',    
        },
        // NUEVA PALETA EXCLUSIVA SECCIÓN SIGLAS (Extraída de tu imagen)
        siglas: {
          100: '#A2DFF7', // Azul muy claro
          200: '#6BCBEB', // Azul claro
          300: '#3A9AD9', // Azul medio
          400: '#007B8A', // Verde Azulado (Teal) - Usaremos este para el título "verde"
          500: '#005F6B', // Oscuro profundo
        },
        card: {
          clinic: '#3B8A3B',   
          nephro: '#00796B',   
          genomics: '#455A64', 
          cardio: '#C62828',   
        },
        accent: {
            success: '#009688', 
            warning: '#FBC02D', 
            error: '#D32F2F',
            info: '#0288D1'
        }
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(59, 138, 59, 0.15), 0 2px 4px -1px rgba(59, 138, 59, 0.1)',
      }
    },
  },
  plugins: [],
}