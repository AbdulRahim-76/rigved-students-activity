import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname: string | undefined = undefined;
  lastname: string | undefined = undefined;
  // trough event binding you can pass values to fn & ln
  save(fn: string, ln: string): void {
    this.firstname = fn;
    this.lastname = ln;
  }

}
