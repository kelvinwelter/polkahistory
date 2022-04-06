module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      "@babel/plugin-transform-runtime",
      ["@babel/plugin-proposal-class-properties", { loose: true }],
    ],
    env: {
      testing: {
        presets: [
          [ "@babel/preset-env", { targets: { node: "current" }}],
        ],
      },
    },
};