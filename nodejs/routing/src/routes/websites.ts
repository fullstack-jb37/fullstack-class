import { Router, Request, Response } from 'express'
import { readFile } from 'fs/promises'
import { Website } from '../types'
import { responseError } from '../tools'

const router: Router = Router()

router.get('/', async function (req: Request, res: Response) {
    try {
        const websites: Website[] = JSON.parse(await readFile('./db/websites.json', 'utf8'))
        res.json(websites)
    } catch (error) {
        responseError(error, res)
    }
})

router.get('/:id', async function (req: Request, res: Response) {
    try {
        const websites: Website[] = JSON.parse(await readFile('./db/websites.json', 'utf8'))

        const [website] = websites.filter(website => website.id === +req.params.id)
        res.json(website)
    } catch (error) {
        responseError(error, res)
    }
})

export default router