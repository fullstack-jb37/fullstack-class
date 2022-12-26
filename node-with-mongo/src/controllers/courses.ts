import { Icourse } from '../interfaces/course'
import { Course } from '../models/course'
import { Document } from 'mongoose'

export const createCourse = async (
  doc: Icourse
): Promise<Document<unknown, any, Icourse>> => {
  const course = new Course(doc)
  return await course.save()
}

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
