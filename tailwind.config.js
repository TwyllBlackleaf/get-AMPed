//Where we define our project color palette, type scale, fonts, breakpointes, border radius values


const colors = require('tailwindcss/colors')

module.export = {

    theme: { 
        screens: {
        small:'480px',
        md: '768px',
        lg: '976px',
        },

    //set color palette for pages
        colors: {
            blue: colors.teal[500],
            gray: colors.trueGray[300],
            white: colors.blueGray[50],
            black: colors.trueGray[900],
        },
    // 
    fontFamily: {
        sans: ['Ariel', 'Helvetica', 'sans-serif',],
        serif: ['serif'],
      },

    extend: {
        spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        },
    }

    }
};  