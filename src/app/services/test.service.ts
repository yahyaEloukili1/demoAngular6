import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  test(elts: {
    [key: number]: string
  }){
console.log(elts)
  }
}
