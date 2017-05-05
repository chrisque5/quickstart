import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  	<h1>Hello {{name}}</h1>
  	<p><a href="mailto:{{email}}">{{email}}</a></p>
    <button (click)="toggleHobbies">Show Hobbies</button>
    <div *ngIf="showHobbies">
      <ul>
        <li *ngFor="let hobby of hobbies">{{hobby}}</li>
      </ul>
    </div>
  `,
})
export class UserComponent  {
	name: string;
  email: string;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = "Christie";
    this.email = "chrisque5@gmail.com";
    this.hobbies = ["Music", "Movie", "Gadgets", "Bikes", "Cars"];
    this.showHobbies = false;
  }

  toggleHobbies() {
    this.showHobbies = true;
  }
}
