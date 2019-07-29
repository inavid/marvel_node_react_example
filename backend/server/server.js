'use strict'

require('dotenv').config()
const http = require('http')
const chalk = require('chalk')
const express = require('express')
const cors = require('cors')
const debug = require('debug')('cct:api')

const api = require('./api')

const port = process.env.PORT || 3000
const frontendDomain = process.env.FRONTEND_DOMAIN || 'http://localhost:3000'
const app = express()
const server = http.createServer(app)

var corsOptions = {
  origin: frontendDomain,
  optionsSuccessStatus: 200
}

// API V1
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))
app.use('/api/v1', api)

// Express Error and not 200 status handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)
  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }
  res.status(500).send({ error: err.message })
})

function handleFatalError (err) {
  console.error(`${chalk.red('[Fatal Error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

// If the server is instantiated by someone (tests for example) then we should return an instance,
// if not then should run the server
if (!module.parent) {
  process.on('uncaughtException', handleFatalError)
  process.on('unhandledRejection', handleFatalError)

  server.listen(port, () => {
    console.log(`${chalk.gray('[cct-api]')} server listening on port ${port}`)
  })
}

module.exports = server
