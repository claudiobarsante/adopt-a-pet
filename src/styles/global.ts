import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
  --color-purple:#7b74c9;
  --color-pink:#e577ce;
  --color-light-blue:#58bcda;
  --color-mustard:#ffc32e;
  --color-light-grey: #d5d5d5;
  --color-primary:#000000;
  --color-background-card:#fbf7f4;
  --color-button-text:#fff;
  --color-grey:#f3f2f2;
  --color-success: #73bd73;
  --color-error:#c53030;
  --color-grey-hard:#666360;

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
  margin-left:3%;
  margin-right:3%;
}

body,
input,
textarea,
select,
button {

font: 400 1.6rem 'Jost', sans-serif;
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
