import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1600,

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
