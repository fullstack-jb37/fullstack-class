import express, { Application, NextFunction, Request, Response } from 'express'
import 'dotenv/config'
const app: Application = express()

app.use(express.json())


app.post('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        if (['123', '345'].includes(req.body.password)) {
            next()
        }
        console.log(res.locals)
        const response = {
            ...res.locals,
            requestBody: req.body
        }
        res.send({ message: 'You do not have admin permissions', ...response })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.post('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        res.locals.data = 'Classified data'
        res.locals.message = 'You have admin permissions'
    } catch (error: any) {
        console.error(error.message)
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