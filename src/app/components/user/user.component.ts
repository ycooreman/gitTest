import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  email:string;
  age:number;
  address:Address;
  hobbies:string[];

  constructor() { }

  ngOnInit() {
    this.name = "John Sponge";
    this.email = 'my@email.com';
    this.age = 43;
    this.address = {
      street:'Tylney Road',
      postcode:'BR1 2SD',
      county:'Kent'
    }
    this.hobbies = ['Sleeping','Eating'];
  }

  myClick() {
    this.name = 'Bill Spill';
    this.hobbies.push('Clicking buttons');
  }
}

interface Address{
  street:string,
  postcode:string,
  county:string
}