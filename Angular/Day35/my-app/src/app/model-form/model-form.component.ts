import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname = new FormControl('Ab');
  lastname = new FormControl('');
}
