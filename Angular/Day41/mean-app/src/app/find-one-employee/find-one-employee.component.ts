import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-find-one-employee',
  templateUrl: './find-one-employee.component.html',
  styleUrls: ['./find-one-employee.component.css']
})
export class FindOneEmployeeComponent implements OnInit {

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }

  employee: any | undefined = undefined;

  _id= new FormControl('');

  handleClick(id: number) : void {
    this._service.getEmp(id).subscribe((data)=>{
      this.employee = data;
    });
  }

}
