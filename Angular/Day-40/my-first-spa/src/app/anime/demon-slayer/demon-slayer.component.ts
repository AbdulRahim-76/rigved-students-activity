import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demon-slayer',
  templateUrl: './demon-slayer.component.html',
  styleUrls: ['./demon-slayer.component.css']
})
export class DemonSlayerComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}

