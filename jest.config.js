const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: ['app/**/*.{ts,tsx}', '!app/**/__tests__/**'],
  coverageThreshold: {
    global: { lines: 80 },
  },
}

module.exports = createJestConfig(config)
