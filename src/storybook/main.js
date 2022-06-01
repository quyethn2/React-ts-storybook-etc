const path = require("path");

const config = {
  stories: [
    "../../src/**/*.stories.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  staticDirs: ["../../public"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
    enableCrashReports: false,
  },
  features: {
    postcss: false,
  },
  // replace config webpack
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@src": path.resolve("src"),
    };
    return config;
  },
};
module.exports = config;
