import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-death-note',
  templateUrl: './death-note.component.html',
  styleUrls: ['./death-note.component.css']
})
export class DeathNoteComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

}

