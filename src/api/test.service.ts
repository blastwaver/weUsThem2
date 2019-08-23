import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {of as observableOf,  Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TestService {
  // host = `${window.location.protocol}//${window.location.host}`;
  env = environment;

  constructor(private httpClient: HttpClient) {
  }

  public getAllData() {
      return this.httpClient.get(`${this.env.host}/api/test`);
      // return this.httpClient.get(`http://localhost:5000/api/test`);
  }

  public createContact(contact: {email: string, name: string, content: string}) {
    return this.httpClient.post(`${this.env.host}/api/test/contact`, contact);
    // return this.httpClient.post(`http://localhost:5000/api/test/contact`, contact);
  }


}

