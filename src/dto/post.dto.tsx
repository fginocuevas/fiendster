import { Comment } from "./comment.dto";

export class Post {
    
    id?: number;
    content?: string;
    author?: string;
    likes?: number = 0;
    dislikes?: number = 0;

    comments?: Comment[] = [];

    constructor(id: number, content: string, author: string) {
        this.id = id;
        this.content = content;
        this.author = author;
    }

}