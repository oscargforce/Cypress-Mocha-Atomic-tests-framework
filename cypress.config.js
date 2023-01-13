const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `https://askomdch.com`,
  },
  env: {
    username: "qa123",
    password: "qa123",
  },
});
