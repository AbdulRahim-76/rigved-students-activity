import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  name: string | undefined = undefined;
  constructor(private _ar: ActivatedRoute) { }

  ngOnInit(): void {
    this._ar.params.subscribe((p: Params) => {
      this.name = p['n']
    });
  }

}




