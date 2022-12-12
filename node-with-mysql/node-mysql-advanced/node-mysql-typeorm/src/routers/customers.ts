import { Router, Request, Response } from 'express'
import { createCustomer } from '../controllers/customers';

const router: Router = Router()

router.post('/', async (req: Request, res: Response) => {
    try {
        const newCustomer = await createCustomer(req.body)
        res.send(newCustomer)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export default router
