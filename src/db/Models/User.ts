import { Schema, model, type Model, models } from 'mongoose'

export interface User {
  uid: string
  name?: string
  img?: string
  email?: string
  lastLogin: Date
}

const userSchema = new Schema<User>({
  uid: { type: String, required: true },
  name: { type: String, required: false },
  img: { type: String, required: false },
  email: { type: String, required: false },
  lastLogin: { type: Date, required: true }
})

export default (models.User as Model<User>) ?? model('User', userSchema)
