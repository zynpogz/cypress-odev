const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://reqres.in",
    env: {
      fakestore: "https://fakestoreapi.com"
    }
  }
});
