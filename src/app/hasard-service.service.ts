import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HasardServiceService {
private result: number;
  constructor() { }

  setValue(value:number){
    this.result = value;
  }

   getValue(){
     return this.result;
   }
}
