import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-of-life-cycle-hook',
  template: `<div>Parent Component</div>
  <button (click)="toggle()">Toggle</button>
  <input type="text" [(ngModel)]="val" />
  <app-child-of-life-cycle-hook *ngIf="activatedChild"  [outputFromParent]="propVal" [someOutput]="val"></app-child-of-life-cycle-hook>
  `,
  styles: ['']
})
export class ParentOfLifeCycleHookComponent implements OnInit, OnChanges{
    val = 'init'
    propVal = 'parent input'
    activatedChild = false
    constructor(){
        console.log('parent constructor');
        
    }

    ngOnInit(): void {
        console.log('parent ngOnInit');
    }

    toggle(){
        this.activatedChild = !this.activatedChild
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('parent ngOnChanges');
        
    }

}
