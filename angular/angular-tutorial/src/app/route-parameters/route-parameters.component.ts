import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-parameters',
  template: `
    <div [ngSwitch]="websiteId">
      <div *ngSwitchCase="1">This is an awesome website!</div>
      <div *ngSwitchCase="2">This is an amazing website!</div>
      <div *ngSwitchCase="3">This website is in development</div>
      <div *ngSwitchDefault>Details not provided</div>
      <button (click)="displayPrevWebsite()">Prev</button>
      <br />
      <button (click)="displayNextWebsite()">Next</button>
      <br />
      <button (click)="displayAllWebsites()">Go Back</button>
    </div>
  `,
  styles: [],
})
export class RouteParametersComponent implements OnInit {
  websiteId!: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  // ngOnInit(){
  //     const id = this.activatedRoute.snapshot.paramMap.get('id')
  //     this.websiteId = id ? +id : 0
  // }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (data) => {
        const id = data.get('id');
        this.websiteId = id ? +id : 0;
      },
      error: (error) => console.error(error),
    });
  }

  // displayPrevWebsite(){
  //     this.websiteId = Math.abs( this.websiteId - 1 )
  //     this.router.navigate(['/websites', this.websiteId])
  // }

  // displayNextWebsite(){
  //     this.websiteId = Math.abs( this.websiteId + 1 ) % 4
  //     this.router.navigate(['/websites', this.websiteId])
  // }

  displayPrevWebsite() {
    this.websiteId = this.websiteId - 1 === 0 ? 3 : this.websiteId - 1
    this.router.navigate(['../', Math.abs(this.websiteId)], {relativeTo: this.activatedRoute});
  }

  displayNextWebsite() {
    this.websiteId = this.websiteId + 1 === 4 ? 1 : this.websiteId + 1
    this.router.navigate(['../', this.websiteId], {relativeTo: this.activatedRoute});
  }

  displayAllWebsites(){
    this.router.navigate(['../', {id: this.websiteId}], {relativeTo: this.activatedRoute});
  }
}
