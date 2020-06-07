const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const url = `http://localhost:${port}`

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.set('port', port)

  server.get('/', (req, res) => {
    const user = { email: 'user@gmail.com' }
    app.render(req, res, '/', { user })
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, onListening)

  function onListening(err) {
    if (err) {
      throw err
    }
    console.info(`Ready on ${url}`)
  }
})

module.exports = app
