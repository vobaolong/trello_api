import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST
app.use('/', (req, res) => {
  res.send('<h1>Hello World!</h1><hr>')
})

app.listen(HOST, PORT || 8080, () => {
  console.log(`Hello BaoLong Dev, I'm running at ${HOST}:${PORT}/`)
})
