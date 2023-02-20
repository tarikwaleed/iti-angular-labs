import { Component, Inject, Input } from '@angular/core';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Post } from '../models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  posts: any[] = []; // Define the 'posts' property as an empty array of type 'any'
  post: any = { title: 'My post' };
  @Input('body') body!: string;
  title = 'posts-app';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
    });
  }
}
