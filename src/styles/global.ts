import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
  --color-primary:#cc6e00;
}

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

html{
  font-size:62.5%;
}

html,body, #__next{
  height:100%;
}

body,
input,
textarea,
select,
button {
	font: 400 1.6rem 'Montserrat', sans-serif;
}

button {
	cursor: pointer;
}

a {
	color: inherit;
	text-decoration: none;
}

`;

export default GlobalStyles;
