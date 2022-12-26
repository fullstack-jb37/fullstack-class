import { Router, Request, Response } from 'express'
import { createCourse, findCourseById, findCourses } from '../controllers/courses';


const router: Router = Router()

router.post('/', async (req: Request, res: Response) => {
    try {
        const course = await createCourse(req.body)
        res.send(course)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})


router.get('/:id', async (req: Request, res: Response) => {
    try {
        const course = await findCourseById(req.params.id)
        course ? res.send(course) : res.sendStatus(404)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

router.get('/', async (req: Request, res: Response) => {
    try {
        const courses = await findCourses(req.query)
        courses.length ? res.send(courses) : res.sendStatus(404)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})


export default router

