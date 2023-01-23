import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent-of-child-routes',
  template: `
      <button (click)="navigateToChildOne()">Navigate to child 1</button>
      <button (click)="navigateToChildTwo()">Navigate to child 2</button>
      <router-outlet></router-outlet>
  `,
  styles: ['']
})
export class ParentOfChildRoutesComponent {
    constructor(private router:Router, private activatedRoute: ActivatedRoute){}

    navigateToChildOne(){
        this.router.navigate(['child-1'], {relativeTo: this.activatedRoute})
    }

    navigateToChildTwo(){
        this.router.navigate(['child-2'], {relativeTo: this.activatedRoute})
    }
}
