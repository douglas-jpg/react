module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        // quotes: ["error", "single"], // Configura aspas simples para JavaScript
        "react/prop-types": "off", // Desativa a regra react/prop-types
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "react/jsx-pascal-case": ["error", { allowAllCaps: true }], // Requer que os nomes de componentes React comecem com letra maiúscula
    },
};
