/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  ignorePatterns: ["src/lib/*.*"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  // plugins: ["react-refresh"],
  plugins: ["@typescript-eslint", "react-refresh","react-hooks"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    semi: "error",
    "no-undef":0,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "react-hooks/exhaustive-deps": 1,
    "react/no-array-index-key": 1,
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/no-array-index-key": 0,
    "react-refresh/only-export-components": 0,
    "react-hooks/exhaustive-deps": 0,
    "react-hooks/rules-of-hooks": "error",
  },
};
