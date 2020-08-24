module.exports = {
  root: true,
  globals: {
    node: true
  },
  extends: [
    'react-app',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      version: '999.999.999'
    }
  },
  rules: {
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".tsx", ".jsx"] }],
  }
}
