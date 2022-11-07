const { createServer } = require('http')
const { createReadStream } = require('fs')

const server = createServer((req, res) => {
  try {
    const readStream = createReadStream(`${__dirname}/files/index.html`, 'utf8')
    res.writeHead(200, { 'Content-Type': 'text/html' })
    readStream.pipe(res)
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message)
  }
})

server.listen(3440, () => console.log('Listening on port 3440'))
