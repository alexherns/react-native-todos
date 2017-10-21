module.exports = {
  parser: "babel-eslint",
  env: {
    jest: true
  },
  extends: ["airbnb", "plugin:jest/recommended"],
  plugins: ["jest"],
  rules: {
    "object-curly-newline": 0,
    "semi": 0,
    "react/jsx-filename-extension": 0
  }
};
