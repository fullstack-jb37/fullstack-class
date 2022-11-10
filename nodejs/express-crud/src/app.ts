import express, { Application, Request, Response } from 'express'
import 'dotenv/config'
import { readFile, writeFile } from 'fs/promises'
import { responseError } from './tools'

type User = {
    id: number
    email?: string
    first_name: string
    last_name: string
    avater: string
    role: number
}

const app: Application = express()

const filePath = `${__dirname}/../db/users.json`

app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
    try {
        const firstName = req.query.first_name
        const lastName = req.query.last_name
        const email = req.query.email

        const users: User[] = JSON.parse(await readFile(filePath, 'utf8'))

        if (!firstName && !lastName && !email) {
            return res.send(users)
        }

        const filterdUsers = users.filter(user =>
            (!firstName || firstName && user.first_name === firstName) &&
            (!lastName || lastName && user.last_name === lastName) &&
            (!email || email && user.email === email)
        )

        filterdUsers.length ? res.send(filterdUsers) : res.status(404).send({ message: 'Users not found with your criteria' })
    } catch (error) {
        responseError(error, res)
    }
})

app.get('/:id', async (req: Request, res: Response) => {
    try {
        const userId = +req.params.id
        const users: User[] = JSON.parse(await readFile(filePath, 'utf8'))
        const [user] = users.filter(user => user.id === userId)

        user ? res.send(user) : res.status(404).send(`User ${userId} not found`)
    } catch (error) {
        responseError(error, res)
    }
})

app.post('/', async (req: Request, res: Response) => {
    try {
        const users: User[] = JSON.parse(await readFile(filePath, 'utf8'))

        const id: number = users.reduce((max: number, currentValue: User) =>
            max > currentValue.id ? max : currentValue.id
            , 0)

        const newUser = { id: id + 1, ...req.body }

        users.push(newUser)

        await writeFile(filePath, JSON.stringify(users, null, 2))

        res.send(newUser)

    } catch (error) {
        responseError(error, res)
    }
})


app.delete('/:id', async (req: Request, res: Response) => {
    try {
        const userId = +req.params.id
        const users: User[] = JSON.parse(await readFile(filePath, 'utf8'))
        const filteredUses = users.filter(user => user.id !== userId)

        await writeFile(filePath, JSON.stringify(filteredUses, null, 2))

        res.send(filteredUses)
    } catch (error) {
        responseError(error, res)
    }
})

const port = +(process.env.APP_PORT || 3009)
const host = process.env.APP_HOST || 'localhost'

app.listen(port, host, () => {
    console.log(`Listening on ${host}:${port}`);
})