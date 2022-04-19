import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private _service: UserService) { }

  ngOnInit(): void {
  }

  employee: any | undefined=undefined

  _id=new FormControl('');

  handleClick(id:number){
    
    this._service.deleteEmployee(id).subscribe((data)=>{
      this.employee=data;
    })
  }

}
