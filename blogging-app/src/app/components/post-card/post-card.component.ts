import { Component, Input } from '@angular/core';
import { Post } from 'src/app/dtos/post';
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

}
