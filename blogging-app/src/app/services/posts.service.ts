import { Injectable } from '@angular/core';
import posts from "../../assets/posts.json";
import { Post } from '../dtos/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  getOne(id: number): Post {
    return posts.filter(post => post.id == id)[0]
  }
  getAll(): Post[] {
    return posts
  }
  getSome():Post[]{
    return posts.splice(0,3)
  }

}
