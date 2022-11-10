import { Response } from 'express'

export const responseError = (error: Error | unknown, res: Response) => {
    const errMsg = error instanceof Error ? error.message : 'Unexpected error'
    console.error(errMsg)
    return res.status(500).send()
}