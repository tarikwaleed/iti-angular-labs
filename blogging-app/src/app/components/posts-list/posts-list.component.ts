import { Component, OnChanges } from '@angular/core';
import { Post } from "../../dtos/post";
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnChanges {
  posts: Post[]
  filteredArray!: Post[];
  constructor(postService: PostsService) {
    this.posts = postService.getAll()
    this.filteredArray = this.posts;
  }
  getPostByName(input: HTMLInputElement) {
    this.filteredArray = this.posts.filter((p) => {
      return p.title === input.value;
    });
    if (this.filteredArray.length <= 0) {
      this.filteredArray = this.posts;
    }
    console.log(this.filteredArray);
  }
  ngOnChanges() {
    this.filteredArray = this.posts;
  }

}
