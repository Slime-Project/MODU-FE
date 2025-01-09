/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        system: {
          error: "#ee0000",
          warning: "#ffc54a",
          success: "#009c7b",
          info: "#0074ff"
        },
        primary: {
          50: "#f0e6ff",
          100: "#d7c2fe",
          200: "#bc98fe",
          300: "#9f6aff",
          400: "#8744ff",
          500: "#690dfd",
          600: "#5b05f7",
          700: "#4400ef",
          800: "#2600ea",
          900: "#0000db"
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          350: "#cfcfcf",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121"
        }
      },
      boxShadow: {
        top: {
          md: "0 -2px 4px -2px #0000001a, 0 -4px 6px -1px #0000001a"
        }
      }
    },
  },
}