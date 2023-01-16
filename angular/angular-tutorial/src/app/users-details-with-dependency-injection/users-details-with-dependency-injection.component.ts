import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/User';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users-details-with-dependency-injection',
  template: `<div *ngFor="let user of users">
    <div><b>Name: </b>{{ user.first_name }} {{ user.last_name }}</div>
    <div><b>Email: </b>{{ user.email }}</div>
    <div [ngSwitch]="user.role">
      <b>role: </b>
      <div *ngSwitchCase="1">Super Admin</div>
      <div *ngSwitchCase="2">Admin</div>
      <div *ngSwitchCase="3">User</div>
    </div>
    <hr />
    {{ errorMsg }}
  </div>`,
  styles: [''],
})
export class UsersDetailsWithDependencyInjectionComponent implements OnInit {
  users!: User[];
  errorMsg = '';
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    // this.users = this.usersService.getUsers()
    this.usersService.getUsers().subscribe({
      next: (data) => (this.users = data),
      error: (error) => (this.errorMsg = error.message),
    });
  }
}
