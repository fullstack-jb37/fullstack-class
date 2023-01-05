import { Request, Response, NextFunction } from "express"


export default async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.sendStatus(401)
    }
    const token = authHeader.split(' ')[1]
    if(!token){
        return res.sendStatus(401)
    }

    if(!process.env.ACCESS_TOKEN_SECRET){
        return res.sendStatus(500)
    }

}