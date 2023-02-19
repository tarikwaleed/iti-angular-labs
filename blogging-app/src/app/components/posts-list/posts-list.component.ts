import { Component } from '@angular/core';
import { Post } from "../../dtos/post";
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
  posts: Post[]
  constructor(postService: PostsService) {
    this.posts = postService.getAll()
  }

}
