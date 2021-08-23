module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
 theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: "#e2e2e6"
      // 'primary': '#3490dc',
      // 'secondary': '#ffed4a',
      // 'danger': '#e3342f',
    }),
    extend: {
      backgroundImage: theme => ({
        //'exam': "url('./assets/img/exam.jpg')",
        //'logo': "url('./assets/img/logo-nsa.png')",
        // 'esFonds': "url('./assets/img/es-fondai.png')"
      }),
      colors: {
        green: {
          dark: "#126039",
          1: "#107547",
          2: "#2e6a49",
          3: "#63B992",
          hover: "#218F5D"
        },
        white: {
          1: "#fff",
          hover: "#f9f9f9"
        },
        black: {
          1: "#0d0d0d",
          2: "#212529",
          3: "#333"
        },
        grey: {
          1: "#e2e2e6",
          2: "#808080"
        },
        red: {
          1: "#B53D31"
        },
        orange: {
          1: "#fd7e14"
        },
        blue: {
          main: "#00A7E6",
          dark: "#018CCC",
          hover: '#14AFC7'
        },
        yellow: {
          main: '#fdc714'
        }
      },
      width: {
        '30%': '30%'
      },
      fontSize: {
        header: "1.75rem"
      },
      boxShadow: {
        DEFAULT: "0 2px 4px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"
      },
      margin: {
        'negative48': '-12rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};


