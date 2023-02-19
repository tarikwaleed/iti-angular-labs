import { Component, Input } from '@angular/core';
import { Post } from 'src/app/dtos/post';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input()
  post!: Post;
  @Input()
  id!: number;
  constructor(private postsService: PostsService) {

  }
  ngOnInit(): void {
    this.post = this.postsService.getOne(this.id)
  }


}
