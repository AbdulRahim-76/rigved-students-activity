import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-all-employees',
  templateUrl: './find-all-employees.component.html',
  styleUrls: ['./find-all-employees.component.css']
})
export class FindAllEmployeesComponent implements OnInit {

  employees : any[] | undefined = undefined ;
  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }

  handleClick() : void {
    this._service.getEmployees().subscribe((data)=>{
      this.employees = data;
    });
  }

}
