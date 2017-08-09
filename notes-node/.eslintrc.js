// module.exports = {
//   "extends": "airbnb-base",
//   rules: {
//     "linebreak-style": 0,
// 		"indent": ["error", "tab"],
// 		"no-tabs": 0
//   }
// };

module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": 0,
        "quotes": 0,
        "semi": [
            "error",
            "always"
        ],
				"no-console": 0,
    }
};
