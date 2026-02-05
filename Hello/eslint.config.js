import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js: {} },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.node, ...globals.mocha }
    },
    rules: {
      'no-unused-vars': 'warn',  // Varnar om du skapar variabler som inte används
      'no-console': 'off',       // Tillåter console.log
      semi: ['error', 'never'],  // Ingen semikolon
      indent: ['error', 2]       // 2 mellanslag för indentering
    }
  }
])

