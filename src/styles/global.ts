import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
  --color-background-card:#fbf7f4;
  --color-default-button-text:#fff;
  --color-error:#c53030;
  --color-grey-hard:#666360;
  --color-grey:#f3f2f2;
  --color-light-blue:#58bcda;
  --color-light-grey: #d5d5d5;
  --color-mustard:#ffc32e;
  --color-pink:#e577ce;
  --color-primary:#000000;
  --color-purple:#7b74c9;
  --color-success: #73bd73;

}

* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:none;
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
