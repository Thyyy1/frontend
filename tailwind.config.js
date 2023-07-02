/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#222739",
        "button-color": "#3A325A",
        "description-color": "#BABAB8",
        "background-text": "#2C3040",
        "blue-500": "#1e90ff",
        "blue-700": "#0047ab",
        "green":"	#7CFC00",
        "active-sb-color": "#8970F1",
        "gray": "#BDBCBC"
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ["ui-serif", "Georgia"],
        mono: ['ui-monospace', "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
        ibm: ['IBM Plex Sans', 'sans-serif'],
      
      },
      textShadow: {
        'default': '0 2px 0 #000',
        'md': '0 2px 2px #000',
        'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
        'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
      variants: {
        textShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      },
    },
  },
  plugins: [],
};
