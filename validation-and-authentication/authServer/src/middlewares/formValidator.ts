import { body, ValidationChain} from 'express-validator'

const formValidator: ValidationChain[] = [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('isSuperAdmin').isBoolean().withMessage('isSuperAdmin is required and must be a boolean')
]

export default formValidator