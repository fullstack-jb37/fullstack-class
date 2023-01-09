import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
  //   template: '<p>{{name}}</p>',
  //   styles: [`
  //     p {
  //         background-color: aquamarine;
  //     }
  //   `],
})
export class GetStartedComponent {
  name = 'Yossi';
  arr = [1, 2, 3];
  multiplier = 2
  multiplyArr(){
    for(const key in this.arr){
        this.arr[key] *= this.multiplier
    }
    return this.arr
  }


}
