import { Router, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import formValidator from '../middlewares/formValidator'
import { readFile, writeFile } from 'fs/promises'
import { Admin } from '../types'
import matchedData from '../middlewares/matchedData'

const router: Router = Router()

router.post(
  '/register',
  [matchedData, ...formValidator],
  async (req: Request, res: Response) => {
    try {
      if (!validationResult(req).isEmpty()) {
        const errors = validationResult(req).array()
        return res
          .status(400)
          .send({ errors })
      }
      const url = `${__dirname}/../../../db/admins.json`

      const admins: Admin[] = JSON.parse(
        await readFile(url, 'utf-8')
      )

      const adminExisted: Admin[] = admins.filter(
        (admin: Admin) =>
          admin.username === req.body.username || admin.email === req.body.email
      )

      if(adminExisted.length){
        return res.status(400).send({errors: ['username or email already exists']})
      }

      //get max id in admin db
      const id : number = admins.reduce((acc, cur)=> {
        return acc > cur.id ? acc : cur.id
      }, 0)

      const admin: Admin = {id: id + 1, ...req.body}

      admins.push(admin)

      await writeFile(url, JSON.stringify(admins, null, 2))

      res.send(admin)

    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
  }
)

export default router
