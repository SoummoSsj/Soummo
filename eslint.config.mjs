import eslintPlugin from "@eslint/js";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";

export default [
  eslintPlugin.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslintPlugin.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn", // change from "error" to "warn"
        { vars: "all", args: "after-used", ignoreRestSiblings: true },
      ],
    },
  },
];
