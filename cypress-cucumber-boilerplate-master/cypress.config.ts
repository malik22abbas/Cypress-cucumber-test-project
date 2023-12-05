import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'cypress/reporter-config.json',
  },
  fixturesFolder: 'features/step_definitions/**/',
  defaultCommandTimeout: 30000,
  viewportWidth: 1000,
  viewportHeight: 600,
  watchForFileChanges: true,
  chromeWebSecurity: true,
  waitForAnimation: true,
  animationDistanceThreshold: 20,
  execTimeout: 90000,
  pageLoadTimeout: 90000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  experimentalSourceRewriting: true,
  projectId: 'dvw51k',
  video: false,
  videoCompression: 32,
  videoUploadOnPasses: false,
  screenshotOnRunFailure: true,
  retries: {
    runMode: 1,
    openMode: 2,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'https://www.google.com/',
    specPattern: 'cypress/e2e/features/scenarios/*.{feature,features}',
    excludeSpecPattern: '*.js',
  },
})
