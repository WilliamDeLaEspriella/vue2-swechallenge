module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Colores base
        primary: '#5E72E4',
        'primary-light': '#E9ECFB',

        secondary: '#8392AB',
        'secondary-dark': '#344767',
        'secondary-inverse': '#252F40',

        light: '#F0F2F5',
        'light-dark': '#E9ECEF',
        'light-inverse': '#3A416F',

        dark: '#111827',

        // Neutrales
        'neutral-200': '#E5E7EB',
        'neutral-100': '#F5F5F5',

        // Grises de borde
        'stone-200': '#E5E5E5',
      },
      borderColor: {
        'neutral-200': '#E5E7EB',
        'stone-200': '#E5E5E5',
      },
      borderRadius: {
        '2xl': '1rem',
        '[.95rem]': '0.95rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
