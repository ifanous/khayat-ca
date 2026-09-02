import stylistic from "@stylistic/eslint-plugin";
import eslintPluginAstro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const syntaxRules = {
  "func-style": ["error", "declaration", { allowArrowFunctions: true }],
  "id-length": ["error", { min: 2, exceptions: ["i", "j", "_"] }],
  "no-console": "error",
  "no-control-regex": "off",
  "perfectionist/sort-modules": [
    "error",
    {
      type: "alphabetical",
      order: "asc",
      groups: [
        "export-interface",
        "export-type",
        "interface",
        "type",
        "export-enum",
        "enum",
        "export-class",
        "class",
        "export-function",
        "function",
      ],
    },
  ],
  "@stylistic/no-multiple-empty-lines": [
    "error",
    { max: 1, maxBOF: 0, maxEOF: 0 },
  ],
  "@stylistic/padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      prev: "*",
      next: ["return", "break", "continue", "throw"],
    },
    { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
    { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
    { blankLine: "always", prev: "*", next: "block-like" },
    { blankLine: "always", prev: "block-like", next: "*" },
    {
      blankLine: "any",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"],
    },
    {
      blankLine: "always",
      prev: "multiline-expression",
      next: "multiline-expression",
    },
  ],
  "@typescript-eslint/naming-convention": [
    "error",
    {
      selector: "variable",
      modifiers: ["const", "global"],
      format: ["UPPER_CASE", "camelCase", "PascalCase"],
    },
    {
      selector: "variable",
      modifiers: ["const"],
      format: ["camelCase"],
      filter: { regex: "^[A-Z_]+$", match: false },
    },
    { selector: "function", format: ["camelCase"] },
    {
      selector: "parameter",
      format: ["camelCase"],
      leadingUnderscore: "allow",
    },
    { selector: "typeLike", format: ["PascalCase"] },
  ],
};

export default defineConfig(
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    ignores: ["**/*.astro/*.{ts,tsx,mts,cts}"],
    extends: [...tseslint.configs.recommendedTypeChecked],
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    ignores: ["**/*.astro/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@stylistic": stylistic,
      perfectionist,
      unicorn,
    },
    rules: {
      ...syntaxRules,
      "unicorn/filename-case": [
        "error",
        { cases: { kebabCase: true, pascalCase: true } },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
    },
  },

  {
    files: ["**/*.astro"],
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": tseslint.plugin,
      perfectionist,
      unicorn,
    },
    rules: {
      ...syntaxRules,
      "unicorn/filename-case": [
        "error",
        { cases: { kebabCase: true, pascalCase: true } },
      ],
    },
  },

  {
    files: ["**/*.astro"],
    processor: eslintPluginAstro.processors["client-side-ts"],
  },
  {
    files: ["**/*.astro/*.ts"],
    plugins: {
      "@stylistic": stylistic,
      "@typescript-eslint": tseslint.plugin,
      perfectionist,
      unicorn,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: null,
        projectService: false,
      },
    },
    rules: {
      ...syntaxRules,
    },
  },

  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { unicorn },
    rules: {
      "unicorn/filename-case": [
        "error",
        { cases: { kebabCase: true, pascalCase: true } },
      ],
    },
  },

  {
    files: ["eslint.config.mjs"],
    ...tseslint.configs.disableTypeChecked,
  },
);
