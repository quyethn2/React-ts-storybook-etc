module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true
      }
    ],
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-proposal-decorators",
      {
        decoratorsBeforeExport: true
      }
    ],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "react-intl-auto",
    "@babel/plugin-proposal-class-properties",
    ["transform-require-context"]
  ]
};
