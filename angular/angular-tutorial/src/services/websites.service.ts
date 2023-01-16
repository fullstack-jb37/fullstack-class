import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Website } from 'src/interfaces/Website';

@Injectable({
  providedIn: 'root',
})
export class WebsitesService {
  private getWebsitesUrl = 'http://localhost:3000/websites'
  constructor(private httpClient: HttpClient) {}

  getWebsites() : Observable<Website[]>{
    return this.httpClient.get<Website[]>(this.getWebsitesUrl)
  }

}
