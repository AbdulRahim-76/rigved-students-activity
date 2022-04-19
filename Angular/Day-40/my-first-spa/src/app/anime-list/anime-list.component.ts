import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  

}

