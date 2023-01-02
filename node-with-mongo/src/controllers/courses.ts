import { Icourse } from '../interfaces/course'
import { Course } from '../models/course'
import { Document, Types } from 'mongoose'
import { ObjectID } from 'typeorm'

//create
export const createCourse = async (
  doc: Icourse
): Promise<Document<unknown, any, Icourse>> => {
  const course = new Course(doc)
  return await course.save()
}

//read/find
export const findCourseById = async (
  id: string
): Promise<Document<unknown, any, Icourse> | null> => {
  return await Course.findById(id)
}

export const findCourses = async (filter: {
  isOnline?: string
  startDate?: Date
}): Promise<Document<unknown, any, Icourse>[]> => {
  const { isOnline, startDate } = filter
  console.log(new Date(startDate as Date))
  switch (true) {
    case isOnline !== undefined && startDate !== undefined:
      return await Course.find({
        isOnline: isOnline === 'true',
        startDate: {
          $lte: new Date(startDate as Date),
        },
      })
    case isOnline !== undefined:
      return await Course.find({
        isOnline: isOnline === 'true',
      })
    case startDate !== undefined:
      return await Course.find({
        startDate: {
          $lte: new Date(startDate as Date),
        },
      })
    default:
      return await Course.find()
  }
}

export const findCoursesWithLimitSortSelect = async (
  limit: number,
  sortBy: string,
  keys: string[],
  desc: boolean
): Promise<Document<unknown, any, Icourse>[]> => {
  const select: any = {}
  for (const key of keys) {
    select[key] = 1
  }
  return await Course.find()
    .limit(limit)
    .sort({ [sortBy]: desc ? -1 : 1 })
    .select(select)
  // keys = ["name", "price"]
  // select = {
  //     "name": 1
  //     "price" : 1
  // }
}

export const findCoursesStartWith = async (
  key: string,
  str: string
): Promise<Document<unknown, any, Icourse>[]> => {
  return await Course.find({ [key]: new RegExp(`^${str}`) })
}

export const findCoursesByPriceRange = async (
  gte: number,
  lte: number
): Promise<Document<unknown, any, Icourse>[]> => {
  return await Course.find({
    price: {
      $gte: gte,
      $lte: lte,
    },
  })
}

export const findCoursesOfSpecificLecturers = async (
  lecturers: string[]
): Promise<Document<unknown, any, Icourse>[]> => {
  return await Course.find({
    lecturer: {
      $in: lecturers,
    },
  })
}

export const findCoursesBySpecificOrRangePrice = async (
  eq: number,
  gt: number,
  lt: number
): Promise<Document<unknown, any, Icourse>[]> => {
  console.log(eq, gt, lt)
  //   return await Course.find({
  // $or: [
  //   { price: eq },
  //   {
  //     price: {
  //       $gt: gt,
  //       $lt: lt,
  //     },
  //   },
  // ],
  //   })
  return await Course.find().or([
    { price: eq },
    {
      price: {
        $gt: gt,
        $lt: lt,
      },
    },
  ])
}

export const findCoursesWithPagination = async (
  pageNumber: number,
  pageSize: number
): Promise<Document<unknown, any, Icourse>[]> => {
  return await Course.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
}

//update

export const updateCourse = async (
  id: string,
  data: Icourse,
  onlyOnline: boolean,
  createNew: boolean
): Promise<Document<unknown, any, Icourse> | null | any> => {
  if (onlyOnline) {
    const [course] = await Course.find({ _id: id, isOnline: true })
    console.log(course)
    if (!course) return null
    course.set(data)
    return await course.save()
  }
  return await Course.findByIdAndUpdate(
    id,
    { $set: data },
    { upsert: createNew, new: createNew }
  )
}

// delete
export const deleteCourses = async (topic: string): Promise<number> => {
  const { deletedCount } = await Course.deleteMany({ topics: topic })
  return deletedCount 
}
