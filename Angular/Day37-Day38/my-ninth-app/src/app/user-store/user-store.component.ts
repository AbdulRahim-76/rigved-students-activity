import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: UserService) { }

  ngOnInit(): void {
  }


  profileForm: FormGroup = this.builder.group({
    name: ['', Validators.required],
    gender: ['', Validators.required],
    phoneNo: ['', Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.required])],
    emailId: ['', Validators.required],
    address: this.builder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])]
    })
  })

  saveForm() {
    this.service.save(this.profileForm.value);
    this.profileForm.reset({});
  }
}
