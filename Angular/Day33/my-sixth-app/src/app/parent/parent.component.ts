import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName: string | undefined = "Sachin";
  userArray: string[] = ["Alex", "Charles", "Zaheer", "Yuvraj"];
  num: number = 0;
}
