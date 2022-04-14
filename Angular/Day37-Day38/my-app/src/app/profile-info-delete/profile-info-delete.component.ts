import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info-delete',
  templateUrl: './profile-info-delete.component.html',
  styleUrls: ['./profile-info-delete.component.css']
})
export class ProfileInfoDeleteComponent implements OnInit {
  constructor(private service: UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  id: FormControl = new FormControl('');
  deleteProfile() {
    this.service.deleteProfile(this.id.value);
    this._router.navigate(["profileInfo"]);
  }
}
