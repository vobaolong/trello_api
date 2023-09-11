/* eslint-disable no-console */
import express from 'express'
import { CONNECT_DB, GET_DB } from '@/config/mongodb'

const START_SERVER = () => {
  const app = express()

  const port = 8080
  const hostname = 'localhost'

  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    console.log(`Hello BaoLong Dev, I'm running at http://${hostname}:${port}/`)
  })
}
CONNECT_DB()
  .then(() => console.log('Connect ok'))
  .then(() => START_SERVER())
  .catch((err) => {
    console.error(err)
    process.exit(0)
  })
