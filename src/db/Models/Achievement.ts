import { Schema, model } from 'mongoose'
import { type User } from './User'
import { type Game } from './Game'
import { type Comment } from './Comment'

export interface Achievement {
  author: User
  name: string
  game: Game
  comments: Comment[]
  likes: User[]
  difficulty: number
  content: string
}

const achievementSchema = new Schema<Achievement>({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  game: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  difficulty: { type: Number, required: true },
  content: { type: String, required: true }
})

export const AchievementModel = model<Achievement>('Achievement', achievementSchema)
