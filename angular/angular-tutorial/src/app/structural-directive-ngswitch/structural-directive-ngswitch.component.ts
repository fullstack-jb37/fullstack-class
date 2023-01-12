import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngswitch',
  template: `
      <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'" [style.color]="color">{{color}}</p>
        <p *ngSwitchCase="'green'" [style.color]="color">{{color}}</p>
        <p *ngSwitchCase="'blue'" [style.color]="color">{{color}}</p>
        <p *ngSwitchDefault>black</p>
      </div>
  `,
  styles: ['']
})
export class StructuralDirectiveNgswitchComponent {
    color = "blue"
}
