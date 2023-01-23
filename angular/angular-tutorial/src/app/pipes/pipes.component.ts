import { Component } from '@angular/core';
// x.y-z
@Component({
  selector: 'app-pipes',
  template: `
      <p>{{message}}</p>
      <p>{{message | lowercase }}</p>
      <p>{{message | uppercase }}</p>
      <p>{{message | titlecase }}</p>
      <p>{{message | slice:3 }}</p>
      <p>{{message | slice:3:10 }}</p>
      <p>{{person | json }}</p>
      <p>{{12.2343 | number: '3.1-2' }}</p> 
      <p>{{12.2 | number: '1.2-4' }}</p>
      <p>{{0.5 | percent }}</p>
      <p>{{0.5 | currency }}</p>
      <p>{{0.5 | currency:'ILS' }}</p>
      <p>{{0.5 | currency:'ILS':'code' }}</p>
      <p>{{date | date : 'short' }}</p>
      <p>{{date | date : 'shortDate' }}</p>
      <p>{{date | date : 'shortTime' }}</p>
  `,
  styles: ['']
})
export class PipesComponent {
 message = 'This is a title'
 person = {
    name: 'Yossi',
    age: 40
 }
 date = new Date()
}
