import { Component } from "@angular/core";

@Component({
    selector:'demo',
    template:`<div><h2>Hello {{username}}, I am Demo</h2></div>`,
    styleUrls:['./demo.component.css']
})

export class Demo{
    username : String = "Abdul"
}