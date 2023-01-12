import { Component } from '@angular/core';

@Component({
    selector: 'app-event-binding',
    template: `
   <button (click)="setName()">Greet {{ name }}</button>
   <p>Hello {{name}}</p>
   <input (input)="setAge($event)">
   <p>Your age is  {{age}}</p>
   <button (click)="greeting='Hello '+name+' , you are '+age+' years old!'">Greet {{ name }}</button>
   <p>{{greeting}}</p>
  `,
    styles: ['']
})
export class EventBindingComponent {
    name = 'John'
    setName() {
        this.name = 'Yossi'
    }

    age = '57'
    setAge(event: any) {
        this.age = event.target.value
    }

    greeting = 'Hello Folks'
}
