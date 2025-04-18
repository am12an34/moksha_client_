import { copyFile, writeFile } from 'node:fs'
import { resolve } from 'node:path'

// Create a timestamp for logging
const timestamp = new Date().toISOString()
console.log(`[${timestamp}] Starting post-build process...`)

// Copy server.js to dist folder
copyFile('server.js', 'dist/server.js', err => {
  if (err) {
    console.error(`[${timestamp}] Error copying server.js:`, err)
    throw err
  }
  console.log(`[${timestamp}] Successfully copied server.js to dist/server.js`)
})

// Create a build log file
const buildInfo = {
  buildTime: timestamp,
  environment: process.env.NODE_ENV || 'development',
  version: process.env.npm_package_version || 'unknown'
}

writeFile(
  resolve('dist', 'build-info.json'),
  JSON.stringify(buildInfo, null, 2),
  err => {
    if (err) {
      console.error(`[${timestamp}] Error creating build-info.json:`, err)
      return
    }
    console.log(`[${timestamp}] Successfully created build-info.json`)
    console.log(`[${timestamp}] Post-build process completed successfully`)
  }
)
