// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ],
//   webpackFinal: (config) => {//to consider /src as root
//     config.resolve.modules.push(`${process.cwd()}/src`)
//     return config
//   }
// }

module.exports = {
  "stories":['../src/components/**/stories.tsx'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {//to consider /src as root
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}

