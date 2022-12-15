import { Router, Request, Response } from 'express'
import { createProduct } from '../controllers/products'

const router: Router = Router()

router.post('/', async (req: Request, res: Response) => {
    try {
        const newProduct = await createProduct(req.body)
        res.send(newProduct)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

export default router
