import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <button (click)="toggleHobbies()">{{showHobbies ? 'Hide' : 'Show'}}</button>
    <div *ngIf="showHobbies">
      <ul>
        <li *ngFor="let hobby of hobbies;let i=index;">{{hobby}} <button (click)="deleteHobby(i)">x</button></li>
      </ul>
      <form (submit)="addHobby(hobby.value)">
        <input type="text" #hobby>
      </form>
    </div>
  `
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
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }
}
