import { Schema, model } from 'mongoose'
import { Icourse } from '../interfaces/course';

const courseSchema = new Schema<Icourse>({
    name: String,
    lecturer: String,
    price: {type: Number, min: 0, max: 100},
    topics: [String],
    startDate: { type: Date, default: Date.now},
    isOnline: Boolean
})

export const Course = model<Icourse>('Course', courseSchema)