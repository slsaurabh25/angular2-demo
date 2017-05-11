import {Component} from 'angular2/core';

@Component({
  selector: 'my-app8',
  template: `<h2>User Input On Blur Event</h2>
    <input #myval
      (keyup.enter)="values=myval.value"
      (blur)="values=myval.value">
    <p>{{values}}</p>
  `
})
export class OnblurEventComponent {
  values='';
}