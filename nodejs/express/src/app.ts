import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()

const person =
{
    firstName: 'Yossi',
    lastName: 'Arye',
    age: 31,
    hasChildren: false
}

const replacer = (key: string, value: any) => {
    if (typeof value === 'string' && key !== 'lastName') {
        return value.toUpperCase()
    }
    return value
}

app.use(express.urlencoded({ extended: false }))
// app.use(express.json())
// console.log(JSON.stringify(person, replacer, 3));
app.set('json spaces', 10)
app.set('json replacer', replacer)

app.get('/', (req: Request, res: Response) => {
    try {
        res.sendFile(`${__dirname}/views/home.html`)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get('/about', (req: Request, res: Response) => {
    try {
        res.sendFile(`${__dirname}/views/about.html`)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.get('/about-us', (req: Request, res: Response) => {
    try {
        res.redirect(`/about`)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

app.post('/', (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const response = {
            data: req.body,
            message: 'Successfully got the request'
        }
        res.json(response)
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})


app.post('/no-matter-what', (req: Request, res: Response) => {
    try {
        console.log(req.body);
        res.json({ ...person, ...req.body })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

const port = +(process.env.APP_PORT || 3001)
const host = process.env.APP_HOST || 'localhost'
app.listen(port, host, () => {
    console.log(`listening on port ${port}`);
})