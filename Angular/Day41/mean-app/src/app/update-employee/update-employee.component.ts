import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }

  data: any | undefined = undefined;
  employees: any | undefined = undefined;

  id = new FormControl('');
  salary = new FormControl('');

  handleUpdate() {
    let id = this.id.value;
    let salary = this.salary.value;
    this._service.updateEmployee(id, salary, this.data).subscribe((data) => {
      this.employees = data;
    })
  }


}
