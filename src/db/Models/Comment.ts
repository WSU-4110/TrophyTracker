import { Schema, model } from 'mongoose'
import { type User } from './User'
import { type Achievement } from './Achievement'

export interface Comment {
  author: User
  content: string
  achievement: Achievement
}

const commentSchema = new Schema<Comment>({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  achievement: { type: Schema.Types.ObjectId, ref: 'Achievement', required: true }
})

export const CommentModel = model<Comment>('Comment', commentSchema)
//commit testing