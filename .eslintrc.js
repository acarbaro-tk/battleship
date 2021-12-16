module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  rules: {
    quotes: [2, "double"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    semi: [2, "never"],
    "comma-dangle": ["error", "never"]
  }
};
