const path = require("path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:astro/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: path.resolve(__dirname, "./tsconfig.json"),
      },
    },
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["panda.config.ts", "postcss.config.cjs", "astro.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["postcss.config.cjs"],
      rules: {
        "global-require": "off",
      },
    },
    {
      files: ["src/content.config.ts"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
};
