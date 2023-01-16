import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  template: `<button (click)="emitEvent()">Emit to parent</button>`,
  styles: ['']
})
export class ChildToParentComponent {
    @Output() childData = new EventEmitter()

    emitEvent(){
        this.childData.emit('Message from the child')
    }
}
