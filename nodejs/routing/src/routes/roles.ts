import { Router, Request, Response } from 'express'
import { readFile } from 'fs/promises'
import { Role } from '../types'
import { responseError } from '../tools'

const router: Router = Router()

router.get('/:id', async function (req: Request, res: Response) {
    try {
        const roleId = +req.params.id
        const roles: Role[] = JSON.parse(await readFile('./db/roles.json', 'utf8'))
        const [response] = roles.filter((role) => role.id === roleId)
        res.json(response)
    } catch (error) {
        responseError(error, res)
    }
})
export default router