import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info-store',
  templateUrl: './profile-info-store.component.html',
  styleUrls: ['./profile-info-store.component.css']
})
export class ProfileInfoStoreComponent implements OnInit {


  constructor(private builder: FormBuilder, private service: UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  profile: FormGroup = this.builder.group({
    profileId: [''],
    name: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(10)]],
    gender: ['', [Validators.required]],
    phoneNo: ['', [Validators.minLength(10),Validators.required]],
    emailId: ['', [Validators.required]],
    address: this.builder.group({
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      pin: ['', [Validators.required]]
    })
  });

    saveForm() {
      this.service.save(this.profile.value);
      this._router.navigate(['success', this.profile.value.name])
    }
  }
