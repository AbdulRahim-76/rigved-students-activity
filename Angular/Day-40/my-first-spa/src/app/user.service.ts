import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray: any[] = [
    { username: 'abdul', password: 'abdul@123' },
    { username: 'pravin', password: 'pravin@123' },
    { username: 'sagar', password: 'sagar@123' },
    { username: 'ravi', password: 'ravi@123' },
    { username: 'umar', password: 'umar@123' },
  ];

  constructor() { }

  public getUsers(): any[] {
    return this.userArray;
  }

}
