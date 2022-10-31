const { readFile } = require('fs').promises
const { createServer } = require('http')

const server = createServer((req, res) => {
  try {
    console.log(req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello From Server')
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message)
  }
})

server.listen(3440, () => console.log('Listening on port 3440'))
