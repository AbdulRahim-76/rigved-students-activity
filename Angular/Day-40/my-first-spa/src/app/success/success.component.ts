import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  name: undefined | string = undefined;

  constructor(private _aRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._aRoute.params.subscribe((parameter: Params)=>{
      this.name=parameter['name']
    })
  }

}

