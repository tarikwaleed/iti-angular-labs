import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users = users;
      });
  }



  
}

