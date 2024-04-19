const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('task', {
        // Define custom Cypress task
        log(message) {
          console.log(message);
          return null;
        }
      });
    },
  },
});
