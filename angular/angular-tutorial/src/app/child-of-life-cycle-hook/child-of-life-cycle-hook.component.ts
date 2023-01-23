import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { TimerHandle } from 'rxjs/internal/scheduler/timerHandle';

@Component({
  selector: 'app-child-of-life-cycle-hook',
  template: ` 
    <div>Child Component</div>
    <div>{{someData}}</div>
    <div>{{someOutput}}</div>
  `,
  styles: ['']
})
export class ChildOfLifeCycleHookComponent implements OnInit, OnDestroy, OnChanges{
    @Input() outputFromParent!: string
    @Input() someOutput!: string
    someData!: string
    intervalId!: TimerHandle
    constructor(){
        this.someData = this.outputFromParent//will not work
        console.log('Child constructor');
        
    }

    ngOnInit(): void {
        this.someData = this.outputFromParent//will work
        console.log('Child ngOnInit');
        let counter = 0
        this.intervalId =  setInterval(() => {
            console.log(`Child interval ${++counter}`);
        }, 1000)
    }

    ngOnDestroy(): void {
        console.log('Child ngOnDestroy');
        clearInterval(this.intervalId)
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Child ngOnChanges');
        console.log(changes);
        
        
    }
}
