import {Component} from 'angular2/core';

@Component({
  selector: 'my-app7',
  template: `
    <input #myval (keyup.enter)="values=myval.value">
    <p>{{values}}</p>
  `
})

export class EventFilteringComponent {
  values='';
}