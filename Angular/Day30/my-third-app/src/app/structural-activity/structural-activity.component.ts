import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-activity',
  templateUrl: './structural-activity.component.html',
  styleUrls: ['./structural-activity.component.css']
})
export class StructuralActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users=[
    {name:'Alex', gender:'Male', address:{state:'KA', city:'BLR'}},
    {name:'Jennifer', gender:'Female', address:{state:'MH', city:'MBI'}},
    {name:'Zaheer', gender:'Male', address:{state:'KA', city:'PUN'}}
  ]
  
}
