module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
    screens: {
      '3xl': {
        'max': '21250px'
      },
  
      '2xl': {
        'max': '1640px'
      },

      'xl': {
        'max': '1279px'
      },

      'lg': {
        'max': '1024px'
      },

      'md': {
        'max': '768px'
      },

      'sm': {
        'max': '640px'
      },

      'ms': {
       'max': '425px'
      },

     'xs': {
       'max': '375px'
      },
  }
}