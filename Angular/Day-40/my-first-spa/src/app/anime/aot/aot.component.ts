import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aot',
  templateUrl: './aot.component.html',
  styleUrls: ['./aot.component.css']
})
export class AotComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}

