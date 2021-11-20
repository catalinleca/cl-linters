module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    globals: {
        process: false
    },
    overrides: [
        {
            files: ["*.test.js", "*.test.jsx"],
            env: {
                jest: true
            }
        }
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 11,
        sourceType: "module"
    },
    plugins: ["prettier", "react", "jest"],
    rules: {
        "arrow-parens": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "dot-notation": "error",
        eqeqeq: "error",
        "import/extensions": [
            "warn",
            "ignorePackages",
            {
                ts: "never",
                tsx: "never",
                js: "never",
                jsx: "never"
            }
        ],
        "no-use-before-define": "error",
        "no-var": "error",
        "padding-line-between-statements": [
            "warn",
            { blankLine: "always", prev: "directive", next: "*" }
        ],
        "prefer-const": [
            "error",
            {
                destructuring: "any",
                ignoreReadBeforeAssign: true
            }
        ],
        "prettier": [
            "warn",
            {
                endOfLine: "lf",
                arrowParens: "always"
            }
        ],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/prop-types": "warn",
        strict: "warn",
        yoda: "error"
    },
    settings: {
        react: {
            version: "detect"
        }
    }
}