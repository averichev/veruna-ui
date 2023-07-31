/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier",
    ],
    env: {
        "vue/setup-compiler-macros": true,
    },
    plugins: ["unused-imports"],
    rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "vue/no-mutating-props": "off",
        "vue/v-on-event-hyphenation": "off",
        "vue/attribute-hyphenation": ["error", "never"],
        curly: ["error", "all"],
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
    },
    ignorePatterns: ["cors-proxy.js"],
    // "prettier/prettier": [
    //     "error",
    //     {
    //         endOfLine: "auto",
    //     },
    // ],
};
