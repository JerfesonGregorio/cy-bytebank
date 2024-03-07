const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      {
        "reporter"; "mochawesome",
        "reporterOptions"; 
          {
            "reportDir"; "cypress/report/mochawesome-report",
            "overwrite"; true,
            "html"; true,
            "json"; false,
            "timestamp"; "mmddyyyy_HHMMss"
          }
      }
    },
  },
});
