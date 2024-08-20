module.exports = {
  extends: [
    "eslint-config-ali/typescript/react",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    // 是否需要末尾分号
    semi: ["error", "always"],
    // 使用单引号还是双引号
    quotes: ["error", "double"],
    // 是否需要尾随逗号
    "comma-dangle": ["error", "always-multiline"],
    // 运行定义空的接口
    "@typescript-eslint/no-empty-interface": 0,
  },
};
