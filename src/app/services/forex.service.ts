import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let service: string = 'https://api.fixer.io/latest';
let base: string = 'USD';

@Injectable()
export class ForexService {

  data;
  constructor(private http: HttpClient) {
    this.data = http.get(service + '?base=' + base);
  }

  getNewBase(newBase) {
    return this.http.get(service + '?base=' + newBase);
  }

}
