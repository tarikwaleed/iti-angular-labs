import { Component } from '@angular/core';
import { Post } from "../../dtos/post";
import { Creator } from "../../dtos/creator";



@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  post: Post;
  constructor() {
    this.post = new Post(5,
      "Fancy Title",
      "Fancy Content", 10,
      new Creator("Tarik Waleed",true,15,false))
  }
}
