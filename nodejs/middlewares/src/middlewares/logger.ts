import { Request, Response, NextFunction } from 'express'
import { hostname } from 'os'


const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const info = {
            url: req.url,
            method: req.method,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            hostname: hostname()
        }
        res.locals.info = info
        next()
    } catch (error) {
        res.status(500)
    }
}

export default loggerMiddleware