import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  items: undefined | any[] = undefined;

  constructor(public service: UserService) { }

  ngOnInit(): void {
    this.items = this.service.getProfile();
  }

}





