import { Router, Request, Response} from 'express'
import { readFile, writeFile } from 'fs/promises'
import { responseError, doesUserExist } from '../tools'
import { User } from '../types'

const filePath = `${__dirname}/../../db/users.json`

const router: Router = Router()

router.get('/', async (req: Request, res: Response) => {
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

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const userId = +req.params.id
        const users: User[] = JSON.parse(await readFile(filePath, 'utf8'))
        const [user] = users.filter(user => user.id === userId)

        user ? res.send(user) : res.status(404).send(`User ${userId} not found`)
    } catch (error) {
        responseError(error, res)
    }
})

router.post('/', async (req: Request, res: Response) => {
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

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const userId = +req.params.id
        const users: User[] = JSON.parse(await readFile(filePath, 'utf8'))

        if (!doesUserExist(userId, users)) {
            return res.status(404).send(`User ${userId} not found`)
        }

        const updatedUsers = users.map(user => user.id === userId ? { id: userId, ...req.body } : user)

        await writeFile(filePath, JSON.stringify(updatedUsers, null, 2))

        const [user] = updatedUsers.filter(user => user.id === userId)
        res.send(user)
    } catch (error) {
        responseError(error, res)
    }
})

router.patch('/:id', async (req: Request, res: Response) => {
    try {
        const userId = +req.params.id
        const users: User[] = JSON.parse(await readFile(filePath, 'utf8'))

        if (!doesUserExist(userId, users)) {
            return res.status(404).send(`User ${userId} not found`)
        }

        const updatedUsers: User[] = users.map(user => user.id === userId ? { ...user, ...req.body } : user)

        await writeFile(filePath, JSON.stringify(updatedUsers, null, 2))

        const [user] = updatedUsers.filter(user => user.id === userId)
        res.send(user)
    } catch (error) {
        responseError(error, res)
    }
})

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const userId = +req.params.id
        const users: User[] = JSON.parse(await readFile(filePath, 'utf8'))

        if (!doesUserExist(userId, users)) {
            return res.status(404).send(`User ${userId} not found`)
        }

        const filteredUsers = users.filter(user => user.id !== userId)

        await writeFile(filePath, JSON.stringify(filteredUsers, null, 2))

        res.send(filteredUsers)
    } catch (error) {
        responseError(error, res)
    }
})

export default router