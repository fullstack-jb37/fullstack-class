const { createServer } = require('http')

const server = createServer((req, res) => {
  try {
    console.log(req.url)
    console.log('Ofir')
    res.writeHead(200, { 'Content-Type': 'application/json' })
    const HelloWorld = { hello: 'world' }
    res.end(JSON.stringify(HelloWorld))
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message)
  }
})

server.listen(3440, () => console.log('Listening on port 3440'))
