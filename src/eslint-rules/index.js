module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "radix": ["error", "as-needed"],
    "import/prefer-default-export": "warn",
    "function-paren-newline": "off",
    "no-prototype-builtins": "off",
    "default-case": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "no-case-declarations": "off",
    "arrow-parens": ["error", "as-needed"],
    "prefer-destructuring": "warn",
    "no-unused-vars": "warn",
    "consistent-return": "warn",
    "brace-style": ["error", "1tbs", {
      "allowSingleLine": false
    }],
    "curly": ["error", "all"],
    "no-plusplus": [ "error", {
        "allowForLoopAfterthoughts": true
    }],
    "no-restricted-globals": "warn",
    "no-undef": "warn",
    "max-len": "warn",
    "react/jsx-one-expression-per-line": false,
    "react/no-unused-state": "warn",
    "react/prop-types": "warn",
    "react/no-unescaped-entities": "warn",
    "jsx-a11y/media-has-caption": "warn",
    "class-methods-use-this": "warn",
    "react/no-array-index-key": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/no-autofocus": "warn",
  }
};