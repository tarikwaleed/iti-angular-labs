import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { Post, Comment } from '../models';
import { Comment } from '@angular/compiler';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent {
  post!: Post;
  comments: Comment[] = [];
  postId!: number;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postId = parseInt(id!, 10);
    this.http
      .get<Post>(`https://jsonplaceholder.typicode.com/posts/${this.postId}`)
      .subscribe((post) => {
        this.post = post;
      });

    this.http
      .get<Comment[]>(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.postId}`
      )
      .subscribe((comments) => {
        this.comments = comments;
      });
  }
}
