// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
// import { RouterContext } from "next/dist/shared/lib/router-context";
// import { withNextRouter } from 'storybook-addon-next-router';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { themeApp } from 'styles/theme';

// export const parameters = {
//   nextRouter: {
//     Provider: RouterContext.Provider,
//   },
// }

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeApp}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
