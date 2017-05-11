import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app1'
})

@View({
  template: '<h2>Hello World {{name}} !!</h2>'
})

export class MyHelloWorld1Class {
	name = "Saurabh L";
}