import { Request, Response, NextFunction } from 'express'


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (['123', '345'].includes(req.body.password)) {
            res.locals.data = 'Classified data'
            res.locals.message = 'You have admin permissions'
        } else {
            res.locals.message = 'You do not have admin permissions'
        }
        next()
    } catch (error) {
        res.status(500)
    }
}

export default authMiddleware 