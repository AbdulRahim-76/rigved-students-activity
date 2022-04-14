import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-info-update',
  templateUrl: './profile-info-update.component.html',
  styleUrls: ['./profile-info-update.component.css']
})
export class ProfileInfoUpdateComponent implements OnInit {
  object: any | undefined = undefined;
  constructor(private builder: FormBuilder, private service: UserService) { }

  id: FormControl = new FormControl('')


  profile: FormGroup = this.builder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    gender: ['', Validators.required],
    phoneNo: ['', Validators.compose([Validators.minLength(10), Validators.required, Validators.maxLength(10)])],
    emailId: ['', Validators.required],
    address: this.builder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])]
    })
  })

  updateProfile() {
    this.profile.controls['id'].setValue(this.object.profileId);
    this.profile.controls['name'].setValue(this.object.name);
    this.profile.controls['gender'].setValue(this.object.gender);
    this.profile.controls['phoneNo'].setValue(this.object.phoneNo);
    this.profile.controls['emailId'].setValue(this.object.emailId);
    this.profile.controls['address'].get('state')?.setValue(this.object.address.state);
    this.profile.controls['address'].get('city')?.setValue(this.object.address.city);
    this.profile.controls['address'].get('pin')?.setValue(this.object.address.pin);
  }




  updateForm() {
    console.log(this.profile.value)
    this.service.updateform(this.profile.value)
  }

  getInfo() {
    this.object = this.service.update(this.id.value)
    console.log(this.object)
  }
  ngOnInit(): void {
  }

}
