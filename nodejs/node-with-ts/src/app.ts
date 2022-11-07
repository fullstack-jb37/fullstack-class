import http, { Server, IncomingMessage, ServerResponse } from 'http'

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    try {
        console.log(req.url)
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello From Server')
    } catch (error: any) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end(error.message)
    }
})

server.listen(3440, () => console.log('Listening on port 3440'))
