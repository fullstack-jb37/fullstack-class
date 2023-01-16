import { Component, OnInit } from '@angular/core';
import { Website } from 'src/interfaces/Website';
import { WebsitesService } from 'src/services/websites.service';

@Component({
  selector: 'app-websites-details-with-dependency-injection',
  template: `<div *ngFor="let website of websites">
      <div>{{ website.name }}</div>
    </div>
    <hr>
    {{ errorMsg }}`,
  styles: [''],
})
export class WebsitesDetailsWithDependencyInjectionComponent implements OnInit {
  websites!: Website[];
  errorMsg = '';
  constructor(private websiteService: WebsitesService) {}

  ngOnInit() {
    this.websiteService.getWebsites().subscribe({
      next: (data) => (this.websites = data),
      error: (error) => (this.errorMsg = error.message),
    });
  }
}
