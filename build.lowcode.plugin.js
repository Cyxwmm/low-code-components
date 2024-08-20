module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    // 确保babel-loader配置存在，然后添加optional chaining插件
    config.module
      .rule("js")
      .test(/\.(jsx|tsx|js)?$/)
      .use("babel-loader")
      .loader("babel-loader")
      .options({
        presets: ["@babel/preset-flow", "@babel/preset-env", "@babel/preset-react"],
        plugins: [
          "@babel/plugin-syntax-flow",
          "@babel/plugin-proposal-optional-chaining",
          "@babel/plugin-proposal-nullish-coalescing-operator",
        ],
      });
  });
};
