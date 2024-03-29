import express, { Application, NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import authMiddleware from './middlewares/auth'
import loggerMiddleware from './middlewares/logger'
const app: Application = express()

app.use(express.json())


app.post('/', [authMiddleware, loggerMiddleware], (req: Request, res: Response) => {
    try {
        const response = {
            ...res.locals,
            requestBody: req.body
        }
        res.send(response)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})


app.use((req: Request, res: Response) => {
    console.log(res.locals)
    res.status(404).send('Endpoint not supported')
})

const port = +(process.env.APP_PORT || 3009)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})