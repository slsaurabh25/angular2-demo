import {Component} from 'angular2/core';
import {ShoppingListComponent} from './shopping-item.component';

@Component({
    selector: 'my-app11',
    template: `
    <shopping></shopping>
    `,
    directives: [ShoppingListComponent]
})
export class AppComponent5 {

}