import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { PostServiceService } from '../post-service.service';
import { User } from '../models/user';
import { Post } from '../models/post';


// export interface Post {
//   userId?: number;
//   id?: number;
//   title?: string;
//   body: string;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user: User = {};
  posts!: Post[];
  newPostForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private postService: PostServiceService
  ) { }

  ngOnInit() {
    // const userId = this.route.snapshot.paramMap.get('id');
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });

  }

  onSubmit() {
    const newPost: Post = {
      userId: this.user.id || 0,
      id: undefined,
      title: this.newPostForm.get('title')?.value!,
      body: this.newPostForm.get('body')?.value!,
    };

    this.postService.createPost(newPost).subscribe((post) => {
      console.log(post);
    });
  }
}
