import { Router, Request, Response } from 'express'
import { readFile, writeFile } from 'fs/promises'
import { User } from '../types'
import { responseError } from '../tools'

const router: Router = Router()

router.get('/', async function (req: Request, res: Response) {
    try {
        console.log('arrived')
        const users: User[] = JSON.parse(await readFile('./db/users.json', 'utf8'))
        setTimeout(function () {
            console.log('callback invoked')
            res.json(users)
        }, 5000)
        console.log('after subscription to setTimeout')
    } catch (error) {
        responseError(error, res)
    }
})


router.post('/bulk', async function (req: Request, res: Response) {
    try {
        const usersFilter = req.body
        const users: User[] = JSON.parse(await readFile('./db/users.json', 'utf8'))
        const response = users.filter((user) => usersFilter.includes(user.id))
        res.json(response)
    } catch (error) {
        responseError(error, res)
    }
})

router.post('/', async function (req: Request, res: Response) {
    try {
        console.log('arrived')
        const newUsers = req.body
        const users: User[] = JSON.parse(await readFile('./db/users.json', 'utf8'))
        console.log(users)
        for (const newUser of newUsers) {
            const user = { id: users.length + 1, ...newUser }
            users.push(user)
        }
        //comment it to avoid live server be refreshed
        await writeFile('./db/users.json', JSON.stringify(users), 'utf8')
        setTimeout(function () {
            console.log('callback invoked')
            console.log(users)
            res.json(users)
        }, 5000)
        console.log('after subscription to setTimeout')
    } catch (error) {
        responseError(error, res)
    }
})


export default router