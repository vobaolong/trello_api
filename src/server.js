import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8000

app.get('/', (req, res) => res.send('<h1>Welcome to my project</h1>'))

app.listen(port, hostname, () =>
  console.log(`Hello, I'm running at: http://${hostname}:${port}`)
)
