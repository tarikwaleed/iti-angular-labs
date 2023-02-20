import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Post } from "../../dtos/post";
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnChanges {
  posts!: Post[]
  filteredArray!: Post[];
  @Input()
  title!: string
  constructor(private postService: PostsService) {
    this.posts = postService.getAll()
    this.filteredArray = this.posts;

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.title);
  }

}
