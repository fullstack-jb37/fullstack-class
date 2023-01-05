import { Request, Response, NextFunction } from 'express'

import PasswordValidator from 'password-validator'

const schema: PasswordValidator = new PasswordValidator()

schema
  .is()
  .min(8)
  .is()
  .max(16)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(2)
  .has()
  .not()
  .spaces()
  .is()
  .not()
  .oneOf(['Yossi123', 'Ofir4567'])

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const errors = schema.validate(req.body.password, {
      details: true,
    }) as any[]
    if (!errors.length) {
      next()
    } else {
      return res.status(400).send({ errors })
    }
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
