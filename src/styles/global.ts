import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/* jost-300 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 300;
  src: local(''),
       url('/fonts/jost-v9-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* jost-regular - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/jost-v9-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* jost-500 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 500;
  src: local(''),
       url('/fonts/jost-v9-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* jost-600 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fonts/jost-v9-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* jost-700 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url('/fonts/jost-v9-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* jost-800 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url('/fonts/jost-v9-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* jost-900 - latin */
@font-face {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('/fonts/jost-v9-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* jost-500italic - latin */
@font-face {
  font-family: 'Jost';
  font-style: italic;
  font-weight: 500;
  src: local(''),
       url('/fonts/jost-v9-latin-500italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}
/* jost-italic - latin */
@font-face {
  font-family: 'Jost';
  font-style: italic;
  font-weight: 400;
  src: local(''),
       url('/fonts/jost-v9-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
}


* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


${({ theme }) => css`
  html {
    font-size: 62.5%;
  }

  html,
  body {
    height: 100%;
    margin-left: 3%;
    margin-right: 3%;
  }

  body {
    font-family: ${theme.font.family}
    font-size:${theme.font.sizes.regular}
  }

  button {
	cursor: pointer;
}

a {
	color: inherit;
	text-decoration: none;
}
`}






`;

export default GlobalStyles;
