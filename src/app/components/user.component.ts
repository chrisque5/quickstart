import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
	name: string;
  email: string;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = "Christie";
    this.email = "chrisque5@gmail.com";
    this.hobbies = ["Music", "Movie", "Gadgets", "Bikes", "Cars"];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }
}

interface Post {
  id:  number;
  title: string;
  body: string;
}