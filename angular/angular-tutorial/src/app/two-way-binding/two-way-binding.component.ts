import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
      <input type="text" [(ngModel)]="inputValue"/>
      <p>{{inputValue}}</p>
  `,
  styles: ['']
})
export class TwoWayBindingComponent {
    inputValue = 'Yossi-ihjih'
}
