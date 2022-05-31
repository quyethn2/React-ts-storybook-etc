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
  webpackFinal: async (config) => {
    return { ...config, module: { ...config.module } };
  },
};
module.exports = config;
