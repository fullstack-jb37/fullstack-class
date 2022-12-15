import { Router, Request, Response } from 'express'

const router: Router = Router()

router.post('/order/:order/product/:product', async (req: Request, res: Response) => {
    try {

    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export default router
