import { Component } from '@angular/core';

@Component({
    //   selector: '[app-selector]', //attribute
    //   selector: '.app-selector', //class
    selector: 'app-selector',// custom html tag 
    //   templateUrl: './selector.component.html',
    template: '<p>Hello {{name}}</p>',
    //   styleUrls: ['./selector.component.css']
    styles: [`
    p {
        color: blue;
    }
    `]
})
export class SelectorComponent {
    name = 'Yossi'
}
