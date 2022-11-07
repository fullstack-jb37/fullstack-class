const { createServer } = require('http')
const { createReadStream } = require('fs')

const server = createServer((req, res) => {
  try {
    console.log(req.url)
    switch (req.url) {
      case '/':
        console.log('Ofir')
        const readStream = createReadStream(
          `${__dirname}/files/index.html`,
          'utf8'
        )
        res.writeHead(200, { 'Content-Type': 'text/html' })
        readStream.pipe(res)
        break
      case '/favicon.ico':
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('I will send it to you later! promise!')
        break
      case '/home':
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>This is home page</h1>')
        break
      default:
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>Not Found!</h1>')
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message)
  }
})

server.listen(3440, () => console.log('Listening on port 3440'))
