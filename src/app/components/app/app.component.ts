
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {Comment} from '../../models/Comment';
import {User} from '../../models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  posts: Post [];
  coments: Comment [];
  users: User [];

  constructor( private httpClient: HttpClient){
    httpClient
      .get<User[]>('http://jsonplaceholder.typicode.com/users')
      .subscribe(response => this.users = response);
    httpClient
      .get<Post[]>('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => this.posts = response);
    httpClient
      .get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(response => this.coments = response);

  }
}

