import { User } from './User';
import { Game } from './Game';
import { Comment } from './Comment';

export class Achievement {
  author: User;
  name: string;
  game: Game;
  comments: Comment[];
  likes: User[];
  difficulty: number;
  content: string;

  constructor(
    author: User,
    name: string,
    game: Game,
    comments: Comment[],
    likes: User[],
    difficulty: number,
    content: string
  ) {
    this.author = author;
    this.name = name;
    this.game = game;
    this.comments = comments;
    this.likes = likes;
    this.difficulty = difficulty;
    this.content = content;
  }
}
