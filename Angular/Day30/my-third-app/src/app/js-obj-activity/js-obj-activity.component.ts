import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-obj-activity',
  templateUrl: './js-obj-activity.component.html',
  styleUrls: ['./js-obj-activity.component.css']
})
export class JsObjActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employee = { id: 100, name: 'Ajay', salary: 45200 }
}
