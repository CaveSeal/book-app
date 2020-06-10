const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

require('dotenv').config()

const User = require('./models/User')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 8000
const url = `http://localhost:${port}`

const MONGO_URI = process.env.MONGO_TEST_URI

mongoose.connect(MONGO_URI, {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.set('port', port)

  server.use(
    session({
      name: 'book.sid',
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: false,
        maxAge: 14 * 24 * 60 * 60 * 1000
      },
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 14 * 24 * 60 * 60
      })
    })
  )

  server.get('/', async (req, res) => {
    const user = await User.findOne({ slug: 'team-builder-book' })
    console.log(user)
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
