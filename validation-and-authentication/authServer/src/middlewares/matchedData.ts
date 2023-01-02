import { Request, Response, NextFunction } from 'express'


export default async (req: Request, res: Response, next: NextFunction) => {
    for(const key in req.body){
        if(!['username', 'email', 'password', 'isSuperAdmin'].includes(key)){
            return res.status(400).send({errors: [`Invalid property ${key}`]})
        }
    }
    next()
}