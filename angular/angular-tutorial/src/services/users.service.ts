import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private getUsersUrl = 'http://localhost:3000'
  private getSpecificUsersUrl = 'http://localhost:3000/bulk-users'
  constructor(private httpClient: HttpClient) {}

  getUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(this.getUsersUrl)
  }

  getSpecificUsers(usersIds: number[]) : Observable<User[]>{
    return this.httpClient.post<User[]>(this.getSpecificUsersUrl, usersIds)
  }
//   getUsers() {
//     return [
//       {
//         id: 1,
//         email: 'george.bluth@reqres.in',
//         first_name: 'George',
//         last_name: 'Bluth',
//         avatar: 'https://reqres.in/img/faces/1-image.jpg',
//         role: 2,
//       },
//       {
//         id: 2,
//         email: 'janet.weaver@reqres.in',
//         first_name: 'Janet',
//         last_name: 'Weaver',
//         avatar: 'https://reqres.in/img/faces/2-image.jpg',
//         role: 1,
//       },
//       {
//         id: 3,
//         email: 'emma.wong@reqres.in',
//         first_name: 'Emma',
//         last_name: 'Wong',
//         avatar: 'https://reqres.in/img/faces/3-image.jpg',
//         role: 3,
//       },
//       {
//         id: 4,
//         email: 'eve.holt@reqres.in',
//         first_name: 'Eve',
//         last_name: 'Holt',
//         avatar: 'https://reqres.in/img/faces/4-image.jpg',
//         role: 3,
//       },
//       {
//         id: 5,
//         email: 'charles.morris@reqres.in',
//         first_name: 'Charles',
//         last_name: 'Morris',
//         avatar: 'https://reqres.in/img/faces/5-image.jpg',
//         role: 1,
//       },
//       {
//         id: 6,
//         email: 'tracey.ramos@reqres.in',
//         first_name: 'Tracey',
//         last_name: 'Ramos',
//         avatar: 'https://reqres.in/img/faces/6-image.jpg',
//         role: 2,
//       },
//     ];
//   }
}
