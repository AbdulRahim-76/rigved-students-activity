import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private builder : FormBuilder, private service : UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  name : string | undefined = undefined;

  profileForm: FormGroup = this.builder.group({
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

  saveForm() {
    this.service.saveProfile(this.profileForm.value);
    let n = this.profileForm.value.name;
    this._router.navigate(['success', n]);
  }

}
