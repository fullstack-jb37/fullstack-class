import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngif',
  template: `
      <h1 *ngIf="display">Show Me</h1>
      <h1 *ngIf="!display">Hide Me</h1>

      <div *ngIf="!display; else elseBlock">
        show the else block
      </div>
      <ng-template #elseBlock>
        <div>I'm the else block</div>
      </ng-template>

      <div *ngIf="display; then thenBlock; else elseBlock"></div>
      <ng-template #thenBlock>
        <div>I'm the then block</div>
      </ng-template>
      <ng-template #elseBlock>
        <div>I'm the else block</div>
      </ng-template>
  `,
  styles: ['']
})
export class StructuralDirectiveNgifComponent {
    display = true
}
