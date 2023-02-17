import { Component } from '@angular/core';
import postsArray from "../../../assets/posts.json";
import { Post } from "../../dtos/post";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  posts: Post[]
  constructor() {
    this.posts = postsArray
  }

}
