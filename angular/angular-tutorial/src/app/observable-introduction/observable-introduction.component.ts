import { Component } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable-introduction',
  template: `<ul id="list"></ul>
    {{ errorMsg }}
    {{ completed }} `,
  styles: [''],
})
export class ObservableIntroductionComponent {
  private observable = new Observable((observer: Observer<any>) => {
    observer.next('<li>First in the list</li>');
    observer.next('<li>Second in the list</li>');
    observer.next('<li>Third in the list</li>');
    observer.error('Error: Any error message');
    observer.next('<li>Fourth in the list</li>');

    observer.next('<li>Fifth in the list</li>');
    observer.complete();
  });
  errorMsg = '';
  completed = '';
  constructor() {}

//   ngAfterViewInit() {
//     const list: Element | null = document.getElementById('list');
//     this.observable.subscribe({
//       next: (data) => (list ? (list.innerHTML += data) : ''),
//       error: (error) => {
//         this.errorMsg = error;
//         this.completed = '';
//       },
//       complete: () => {
//         this.completed = 'Transmission done';
//         this.errorMsg = '';
//       },
//     });
//   }


  async ngAfterViewInit() {
    try {
        const list: Element | null = document.getElementById('list');
        const data = await firstValueFrom(this.observable)
        if(list) list.innerHTML = data
        const lastData = await lastValueFrom(this.observable)
        if(list) list.innerHTML += lastData
    } catch (error: any) {
        this.errorMsg = error
    }

  }
}
