import express, { Application, Request, Response } from 'express'
import 'dotenv/config'
import usersRouter from './routes/users'

const app: Application = express()



app.use(express.json())

app.use('/users', usersRouter)



app.use((req: Request, res: Response) => res.status(404).send('Endpoint not supported'))

const port = +(process.env.APP_PORT || 3009)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})