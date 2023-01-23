import { Component, OnInit } from '@angular/core';
import { firstValueFrom, lastValueFrom, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-observable-introduction',
  template: `<ul id="list"></ul>
    <button id="successBtn">Success Btn</button>
    <button id="dangerBtn">Danger Btn</button>
    <button id="doneBtn">Done Btn</button>

    
    `,
  styles: [''],
})
export class ObservableIntroductionComponent implements OnInit {
  private observable = new Observable((observer: Observer<any>) => {
    observer.next('<li>First in the list</li>');
    observer.next('<li>Second in the list</li>');
    observer.next('<li>Third in the list</li>');
    observer.error('Error: Any error message');
    observer.next('<li>Fourth in the list</li>');

    observer.next('<li>Fifth in the list</li>');
    observer.complete();
  });

  private btnObservable = (
    successBtn: HTMLButtonElement,
    dangerBtn: HTMLButtonElement,
    doneBtn: HTMLButtonElement
  ) =>
    new Observable((observer: Observer<any>) => {
      let counter = 0;
      successBtn.onclick = () => {
        observer.next(`Button clicked ${++counter} times`);
      };
      dangerBtn.onclick = () => {
        observer.error(`Error btn clicked`);
      };
      doneBtn.onclick = () => {
        observer.complete();
      };
    });

  errorMsg = '';
  completed = '';
  constructor() {}

  ngOnInit() {
    const list: Element | null = document.getElementById('list');
    this.observable.subscribe({
      next: (data) => (list ? (list.innerHTML += data) : ''),
      error: (error) => {
        this.errorMsg = error;
        this.completed = '';
      },
      complete: () => {
        this.completed = 'Transmission done';
        this.errorMsg = '';
      },
    });

    this.btnObservable(
      document.getElementById('successBtn') as HTMLButtonElement,
      document.getElementById('dangerBtn') as HTMLButtonElement,
      document.getElementById('doneBtn') as HTMLButtonElement
    ).subscribe({
        next: (data) => console.log(data),
        error: (error) => console.log(error),
        complete: () => console.log('Btn Done Clicked'),
    });
  }

  //   async ngOnInit() {
  //     try {
  //         const list: Element | null = document.getElementById('list');
  //         const data = await firstValueFrom(this.observable)
  //         if(list) list.innerHTML = data
  //         const lastData = await lastValueFrom(this.observable)
  //         if(list) list.innerHTML += lastData
  //     } catch (error: any) {
  //         this.errorMsg = error
  //     }

  //   }
}
