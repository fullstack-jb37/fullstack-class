import express, { Application, Request, Response } from 'express'
import mongoose, { connect } from 'mongoose'
import 'dotenv/config'
import courses from './routes/courses'

const mongoUrl = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}?authSource=admin`

console.log('Trying to connect to mongodb')

mongoose.set('strictQuery', false)
connect(mongoUrl)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((error) => {
    console.error(error)
  })

const app: Application = express()

app.use(express.json())
app.use('/courses', courses)

app.use((req: Request, res: Response) => {
  res.sendStatus(404).send(`Endpoint not supported ${req.url}`)
})

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is listening on port ${process.env.APP_PORT}`)
})
