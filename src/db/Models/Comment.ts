import { User } from './User';
import { Achievement } from './Achievement';

export class Comment {
  author: User;
  content: string;
  achievement: Achievement;

  constructor(author: User, content: string, achievement: Achievement) {
    this.author = author;
    this.content = content;
    this.achievement = achievement;
  }
}
