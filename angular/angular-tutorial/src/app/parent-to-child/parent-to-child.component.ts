import { Component, Input } from '@angular/core';

//This component is the child component, while the parent is the app component
@Component({
  selector: 'app-parent-to-child',
  template: `
      <h1>{{ parentData}}</h1>
      <h2>{{ data}}</h2>
  
  `,
  styles: ['']
})
export class ParentToChildComponent {
    @Input() parentData : any;

    @Input('parentData2') data :any;
}
