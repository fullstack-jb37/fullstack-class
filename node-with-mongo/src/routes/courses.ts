import { Router, Request, Response } from 'express'
import {
  createCourse,
  deleteCourses,
  findCourseById,
  findCourses,
  findCoursesByPriceRange,
  findCoursesBySpecificOrRangePrice,
  findCoursesOfSpecificLecturers,
  findCoursesStartWith,
  findCoursesWithLimitSortSelect,
  findCoursesWithPagination,
  updateCourse,
} from '../controllers/courses'

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

router.get('/price-ranges', async (req: Request, res: Response) => {
  try {
    const { gte, lte } = req.query
    const courses = await findCoursesByPriceRange(
      +(gte as string),
      +(lte as string)
    )
    console.log(courses)
    courses.length ? res.send(courses) : res.sendStatus(404)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/price-specific-or-ranges', async (req: Request, res: Response) => {
  try {
    const { eq, gt, lt } = req.query
    console.log('dfjghdfjhfgjbf')
    console.log(eq, gt, lt)
    const courses = await findCoursesBySpecificOrRangePrice(
      +(eq as string),
      +(gt as string),
      +(lt as string)
    )
    console.log(courses)
    courses.length ? res.send(courses) : res.sendStatus(404)
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

router.post('/limit-sort-select', async (req: Request, res: Response) => {
  try {
    const { limit, sortBy, keys, desc } = req.body
    const courses = await findCoursesWithLimitSortSelect(
      limit,
      sortBy,
      keys,
      desc
    )
    courses.length ? res.send(courses) : res.sendStatus(404)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/start-with/:key/:prefix', async (req: Request, res: Response) => {
  try {
    const { key, prefix } = req.params
    const courses = await findCoursesStartWith(key, prefix)
    courses.length ? res.send(courses) : res.sendStatus(404)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.get('/pagination', async (req: Request, res: Response) => {
  try {
    const { pageNumber, pageSize } = req.query
    const courses = await findCoursesWithPagination(
      +(pageNumber as string),
      +(pageSize as string)
    )
    courses.length ? res.send(courses) : res.sendStatus(404)
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

router.post('/by-lecturers', async (req: Request, res: Response) => {
  try {
    const { lecturers } = req.body
    const courses = await findCoursesOfSpecificLecturers(lecturers)
    courses.length ? res.send(courses) : res.sendStatus(404)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.put('/', async (req: Request, res: Response) => {
  try {
    const { id, data, onlyOnline, createNew } = req.body
    const course = await updateCourse(id, data, onlyOnline, createNew)
    course ? res.send(course) : res.sendStatus(404)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

router.delete('/tag/:tag', async (req: Request, res: Response) => {
  try {
    const count = await deleteCourses(req.params.tag)
    count ? res.send(`${count} record deleted`) : res.sendStatus(404)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router

