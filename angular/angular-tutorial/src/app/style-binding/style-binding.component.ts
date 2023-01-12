import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
      <p [style.color]="'green'">green</p>
      <p [style.color]="!success ? 'green' : 'red'">green or red</p>
      <p [style]="stylesMap">mapped style</p>
      <p [ngStyle]="stylesMap">mapped style</p>
  `,
  styles: ['']
})
export class StyleBindingComponent {
    success = true
    stylesMap = {
        color: 'orange',
        'background-color': 'black',
        border: '1px solid blue'
    }
}
