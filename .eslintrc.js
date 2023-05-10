module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["node", "prettier"],
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ["./server/**/*.js"],
      env: {
        node: true,
      },
      extends: ["plugin:node/recommended"],
      rules: {
        "no-console": "off", // Allow console statements in Node.js applications
        "no-process-exit": "error", // Disallow using process.exit()
        "no-unused-vars": ["error", { argsIgnorePattern: "^(req|res|next)$" }], // Allow unused variables that start with "req", "res", or "next"
        "prefer-const": "error", // Enforce using const for variables that aren't reassigned
        semi: ["error", "always"], // Require semicolons
        quotes: ["error", "single"], // Use single quotes for strings
        "comma-dangle": ["error", "always-multiline"], // Require trailing commas in multiline object and array literals
        "object-curly-spacing": ["error", "always"], // Require spaces inside curly braces
        "arrow-parens": ["error", "always"], // Require parentheses around arrow function parameters
        "arrow-spacing": "error", // Require spaces around arrow function arrows
      },
    },
    {
      files: ["./client/**/*.js"],
      env: {
        browser: true,
      },
      extends: ["eslint:recommended"],
      rules: {
        "no-var": "error",
        semi: ["error", "always"],
        quotes: ["error", "single"],
        "no-unused-vars": "warn",
        "no-console": "warn",
        "no-undef": "error",
      },
    },
  ],
};
