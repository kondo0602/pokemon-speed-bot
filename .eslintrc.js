module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
  },
  ignorePatterns: ["dist"],
  extends: ["eslint:recommended"],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/quotes": ["error", "double"],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
