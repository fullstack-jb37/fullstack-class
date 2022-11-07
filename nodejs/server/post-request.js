const { createServer } = require('http')

const server = createServer((req, res) => {
  try {
    let body = ''
    if (req.method === 'POST') {
      req
        .on('data', (chunk) => {
          body += chunk
        })
        .on('end', () => {
          res.writeHead(200, { 'Content-Type': 'application/json' })
          const HelloWorld = { hello: 'world', body: JSON.parse(body) }
          res.end(JSON.stringify(HelloWorld))
        })
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      const HelloWorld = { hello: 'world' }
      res.end(JSON.stringify(HelloWorld))
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message)
  }
})

server.listen(3440, () => console.log('Listening on port 3440'))
