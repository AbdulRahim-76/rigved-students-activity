import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-demo',
  templateUrl: './structural-demo.component.html',
  styleUrls: ['./structural-demo.component.css']
})
export class StructuralDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users=[
    {name:'Alex', gender:'Male', address:{state:'KA', city:'BLR'}},
    {name:'Jennifer', gender:'Female', address:{state:'MH', city:'MBI'}},
    {name:'Zaheer', gender:'Male', address:{state:'KA', city:'PUN'}}
  ]
  
}
