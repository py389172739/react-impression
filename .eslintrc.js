module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    plugins: [
        'react'
    ],
    "rules": {
        "indent": [
            2,
            4,
            {"VariableDeclarator": 1}
        ],
        "import/prefer-default-export": 0,
        "keyword-spacing": 2,
        "no-unused-expressions": 0,
        "react/no-string-refs": 0,
        "react/jsx-indent-props": [2, 4],
        "react/jsx-indent": [2, 4],
        "react/jsx-filename-extension": [2, { extensions: ['.js'] }],
        "react/jsx-closing-bracket-location": 0,
        "react/sort-comp": 0,
        "jsx-a11y/img-has-alt": 0,
        "jsx-a11y/label-has-for": 0,
        "arrow-body-style": 0,
        "space-before-function-paren": 0,
        "keyword-spacing": 0,
        "no-mixed-operators": 0,
        "no-underscore-dangle": 0,
        "one-var": [
            1,
            "always"
        ],
        "no-shadow": 0,
        "no-param-reassign": 0,
        "prefer-const": 0,
        "no-prototype-builtins": 0,
        "no-script-url": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0
    }
};
