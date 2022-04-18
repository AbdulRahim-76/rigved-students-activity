import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  object: any | undefined = undefined;
  constructor(private builder: FormBuilder, private service: UserService, private _router: Router) { }

  id: FormControl = new FormControl('');

  profileForm: FormGroup = this.builder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    gender: ['', Validators.required],
    phone: [
      '',
      Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required,
      ]),
    ],
    email: ['', Validators.required],

    state: ['', Validators.required],
    city: ['', Validators.required],
    pincode: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
    ],
  });

  setProfileValue() {
    this.profileForm.controls['id'].setValue(this.object.profileId);
    this.profileForm.controls['name'].setValue(this.object.name);
    this.profileForm.controls['gender'].setValue(this.object.gender);
    this.profileForm.controls['phone'].setValue(this.object.phone);
    this.profileForm.controls['email'].setValue(this.object.email);
    this.profileForm.controls['state'].setValue(this.object.state);
    this.profileForm.controls['city'].setValue(this.object.city);
    this.profileForm.controls['pincode'].setValue(this.object.pincode);
  }

  updateForm() {
    console.log(this.profileForm.value)
    this.service.updateform(this.profileForm.value);
    alert("Your profile has been updated!")
  }

  getInfo() {
    this.object = this.service.updateProfile(this.id.value)
    console.log(this.object)
  }

  ngOnInit(): void { }
}