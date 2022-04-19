import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-store-employees',
  templateUrl: './store-employees.component.html',
  styleUrls: ['./store-employees.component.css']
})
export class StoreEmployeesComponent implements OnInit {

  constructor(private _service: UserService, private _builder: FormBuilder) { }

  ngOnInit(): void {
  }
  //success response on store
  info: any | undefined = undefined;

  empForm: FormGroup = this._builder.group({
    _id: [], name: [], salary: []
  });

  handleSubmit() {
    this._service.storeEmployee(this.empForm.value).subscribe((data) => {
      this.info = data;
    }
    );
  }

}
