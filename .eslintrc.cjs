module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["astro.config.mjs", "panda.config.ts"],
      rules: {
        "import/no-extraneous-dependencies": "off",
      },
    },
    {
      files: ["src/styles/**/*"],
      rules: {
        "import/no-extraneous-dependencies": "off",
        "no-underscore-dangle": "warn",
        "@typescript-eslint/naming-convention": "warn",
      },
    },
  ],
};
