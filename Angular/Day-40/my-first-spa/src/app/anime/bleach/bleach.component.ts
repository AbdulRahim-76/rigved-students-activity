import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bleach',
  templateUrl: './bleach.component.html',
  styleUrls: ['./bleach.component.css']
})
export class BleachComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}

