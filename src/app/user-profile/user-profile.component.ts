import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = {
    name : 'Doe',
    firstname : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'

  };

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked = false;

  showAge() {

    this.buttonClicked = !this.buttonClicked;
  }
}
