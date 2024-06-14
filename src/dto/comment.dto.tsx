export class Comment {
    author?: string;
    comment?: string;
    likes?: number = 0;
    dislikes?: number = 0;

    constructor(author: string, comment: string) {
        this.author = author;
        this.comment = comment;
    }
    
}