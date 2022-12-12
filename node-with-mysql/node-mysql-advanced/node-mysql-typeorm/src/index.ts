import 'dotenv/config'
import express, { Request, Response, Application } from 'express'
import { AppDataSource } from './data-source'
import customers from './routers/customers'
;(async () => {
  try {
    await AppDataSource.initialize()

    console.log('Successfully connected to mysql')

    const app: Application = express()

    app.use(express.json())

    app.use('/customers', customers)

    app.use((req: Request, res: Response) => {
      res.status(400).send('Resource not found!')
    })

    app.listen(+process.env.APP_PORT, () =>
      console.log('Server is listening on port ' + process.env.APP_PORT)
    )
  } catch (error) {
    console.error(error)
  }
})()
