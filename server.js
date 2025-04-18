import { resolve } from 'node:path'
import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import { config as dotenvConfig } from 'dotenv'
import { createProxyMiddleware } from 'http-proxy-middleware'

dotenvConfig()

// Configure logging
const enableLogging = process.env.ENABLE_LOGS !== 'false'

const port = process.env.PROXY_PORT || 5173

const app = express()

// Request logging middleware
if (enableLogging) {
  app.use((req, res, next) => {
    const start = Date.now()
    res.on('finish', () => {
      const duration = Date.now() - start
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`)
    })
    next()
  })
}

app.use(compression())
app.use('/assets', sirv('./dist/assets', { maxAge: 86400 })) // 1 day
app.use('/images', sirv('./dist/images', { maxAge: 2592000 })) // 1 month
app.use('/logos', sirv('./dist/logos', { maxAge: 2592000 }))
app.use('/moksha', sirv('./dist/moksha', { maxAge: 2592000 }))

app.use(
  '/api',
  createProxyMiddleware({
    // Use '127.0.0.1' instead of localhost
    target: process.env.PROXY_REDIRECT_ORIGIN,
    changeOrigin: true,
  })
)

app.use('/', sirv('./dist'))

app.use('*', (_, res) => {
  res.sendFile(resolve('./dist/index.html'))
})

const server = app.listen(port, () => {
  if (process.env.PROXY_ENV === 'production') {
    console.log(`[${new Date().toISOString()}] Server started at port ${port}`)
  } else {
    console.log(`[${new Date().toISOString()}] Server started at http://localhost:${port}`)
  }
})

// Add error logging
if (enableLogging) {
  server.on('error', (error) => {
    console.error(`[${new Date().toISOString()}] Server error:`, error)
  })

  process.on('uncaughtException', (error) => {
    console.error(`[${new Date().toISOString()}] Uncaught exception:`, error)
  })

  process.on('unhandledRejection', (reason, promise) => {
    console.error(`[${new Date().toISOString()}] Unhandled rejection at:`, promise, 'reason:', reason)
  })
}
