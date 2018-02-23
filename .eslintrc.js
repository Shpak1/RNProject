module.exports = {
    "parser": "babel-eslint",
    "extends": "itomych-react",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "import/no-unresolved": "off",
        "react/forbid-prop-types": "off",
        "react/prop-types": "off",
        "linebreak-style": ["error", "windows"],
    },
    "globals": {
        "Promise": true,
        "it": true,
        "expect": true,
        "describe": true
    },
    "plugins": [
        "react",
        "react-native"
    ]
};