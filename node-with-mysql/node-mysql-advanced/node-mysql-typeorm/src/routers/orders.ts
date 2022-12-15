import { Router, Request, Response } from 'express'
import { createOrder } from './../controllers/orders';

const router: Router = Router()

// localhost:8080/orders/customer
router.post('/customer/:customer', async (req: Request, res: Response) => {
    try {
        const newOrder = await createOrder({...req.params, ...req.body})
        res.send(newOrder)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export default router
