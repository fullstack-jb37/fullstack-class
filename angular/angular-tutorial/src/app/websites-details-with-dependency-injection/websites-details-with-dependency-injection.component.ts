import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { first, Subscription, firstValueFrom } from 'rxjs';
import { User } from 'src/interfaces/User';
import { Website } from 'src/interfaces/Website';
import { UsersService } from 'src/services/users.service';
import { WebsitesService } from 'src/services/websites.service';

@Component({
  selector: 'app-websites-details-with-dependency-injection',
  template: `<div
      *ngFor="let website of websites; index as i"
      [class.selected]="websiteId === website.id"
    >
      <div class="pointer" (click)="getWebsiteDesc(website.id)">
        <b>name: </b> {{ website.name }}
      </div>
      <div><b>users: </b></div>
      <div *ngIf="users">
        <div *ngFor="let user of users[i]">
          <div>{{ user.first_name }} {{ user.last_name }}</div>
        </div>
      </div>
      <hr />
    </div>

    {{ errorMsg }}`,
  styles: [
    '.pointer {cursor: pointer;}',
    '.selected {background-color: aquamarine; font-size: 1.2rem}',
  ],
})
export class WebsitesDetailsWithDependencyInjectionComponent implements OnInit {
  websites!: Website[];
  users!: User[][];
  subscriptions: Subscription[] = [];
  errorMsg = '';
  websiteId!: number;
  constructor(
    private websiteService: WebsitesService,
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (data) => {
        const id = data.get('id');
        this.websiteId = id ? +id : 0;
      },
      error: (error) => console.error(error),
    });

    const websitesSubscription = this.websiteService
      .getWebsites()
      .pipe(first())
      .subscribe((websites) => {
        this.websites = websites;
        this.users = [];
        for (const i in websites) {
          const userSubscription = this.usersService
            .getSpecificUsers(websites[i].users)
            .subscribe((users) => this.users.push(users));
          this.subscriptions.push(userSubscription);
        }
      });
    this.subscriptions.push(websitesSubscription);
  }

  //   async ngOnInit() {

  //     this.websites = await firstValueFrom(this.websiteService.getWebsites());

  //     const promises = [];

  //     for (const website of this.websites) {
  //       promises.push(
  //         firstValueFrom(this.usersService.getSpecificUsers(website.users))
  //       );
  //     }

  //     this.users = await Promise.all(promises);
  //   }

  getWebsiteDesc(id: number) {
    this.router.navigate(['/websites', id]);
  }

  //   ngOnDestroy() {
  //     for (const subscription of this.subscriptions) {
  //       subscription.unsubscribe();
  //     }
  //   }
}
