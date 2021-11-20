module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:import/typescript"],
    overrides: [
        {
            files: ["*.test.ts", "*.test.tsx"],
            env: {
                jest: true
            }
        }
    ],
    plugins: ["@typescript-eslint"],
    rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] }
        ],
        "no-redeclare": "off"
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".js", ".jsx", ".ts", ".tsx"]
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true
            },
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    }
};
