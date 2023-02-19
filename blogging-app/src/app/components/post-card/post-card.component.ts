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
  color!: string
  text!: string
  constructor(private postsService: PostsService) {
    this.color = "primary"
    this.text = "Follow"
  }
  ngOnInit(): void {
    this.post = this.postsService.getOne(this.id)
  }
  toggleFollow() {
    this.post.creator.isFollowing = !(this.post.creator.isFollowing)
    this.color = (this.color === "warn") ? "primary" : "warn"
    this.text = (this.text === "Follow") ? "Unfollow" : "Follow"


  }


}
