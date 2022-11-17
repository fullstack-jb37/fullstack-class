import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import websitesRouter from './routes/websites'
import usersRouter from './routes/users'
import rolesRouter from './routes/roles'
import 'dotenv/config'

const app: Application = express()
app.use(cors())
app.use(express.json())

app.use('/websites', websitesRouter)
app.use('/users', usersRouter)
app.use('/roles', rolesRouter)

app.use((req: Request, res: Response) => res.status(404).send('Endpoint not supported'))

const port = +(process.env.APP_PORT || 3009)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})