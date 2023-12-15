import { defineConfig } from 'cypress'
import synpressPlugins from '@synthetixio/synpress/plugins'
import * as dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  userAgent: 'synpress',
  chromeWebSecurity: true,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  video: !!process.env.CYPRESS_ENABLE_VIDEO || false,
  e2e: {
    testIsolation: false,
    setupNodeEvents: (on, config) => {
      synpressPlugins(on, config)
    },
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: [
      `cypress/e2e/specs/*.spec.cy.ts`,
      'cypress/e2e/specs/flow/connect.spec.cy.ts',
      'cypress/e2e/specs/flow/feeSwitching.spec.cy.ts',
      'cypress/e2e/specs/flow/bridging.spec.cy.ts',
    ],
  },
  env: {
    target_hash: process.env.CYPRESS_TEST_HASH,
  },
  includeShadowDom: true,
})
