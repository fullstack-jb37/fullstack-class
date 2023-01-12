import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngfor',
  template: `
      <div *ngFor="let color of colors">
        <p [style.color]="color">{{color}}</p>
      </div>

      <div *ngFor="let color of colors; index as i">
        <p [style.color]="color">{{i}}, {{color}}</p>
      </div>

      <div *ngFor="let color of colors; first as f">
        <p *ngIf="f" [style.color]="color">{{color}}</p>
      </div>

      <div *ngFor="let color of colors; last as l">
        <p *ngIf="l" [style.color]="color">{{color}}</p>
      </div>

      <div *ngFor="let color of colors; odd as o; index as i">
        <p *ngIf="o" [style.color]="color">{{i}} {{color}}</p>
      </div>

      <div *ngFor="let color of colors; even as e; index as i">
        <p *ngIf="e" [style.color]="color">{{i}} {{color}}</p>
      </div>
  `,
  styles: ['']
})
export class StructuralDirectiveNgforComponent {
    colors = ['red', 'green', 'blue']
}
