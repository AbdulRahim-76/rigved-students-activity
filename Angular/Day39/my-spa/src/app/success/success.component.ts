import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  username: undefined | string = undefined
  constructor(private _aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._aRoute.params.subscribe((parameter: Params)=>{
      this.username=parameter['name']
    })
  }

}
