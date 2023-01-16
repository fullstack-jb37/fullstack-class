import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/User';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users-with-dependency-injection',
  template: `<div *ngFor="let user of users">
      <div>{{ user.first_name }} {{ user.last_name }}</div>
    </div>
    {{ errorMsg }}`,
  styles: [''],
})
export class UsersWithDependencyInjectionComponent implements OnInit {
  users!: User[];
  errorMsg = ''

  constructor(private usersService: UsersService) {}
  
  ngOnInit() {
    // this.users = this.usersService.getUsers()
    this.usersService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (error) => (this.errorMsg = error.message),
    });
  }
}
