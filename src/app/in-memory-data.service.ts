import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService{

  constructor() { }
  createDb() {
    const list = [
      {  
        "id": 1,  
        "name": "banana",  
        "description": "yellow",  
        "price": "4"  
      },  
      {  
        "id": 2,  
        "name": "apple",  
        "description": "pink",  
        "price": "6"  
      },  
      {  
        "id": 3,  
        "name": "orange",  
        "description": "orange",  
        "price": "3"  
      },  
      {  
        "id": 4,  
        "name": "berry",   
        "description": "blue",  
        "price": "12"  
      },  
      {  
        "id": 5,  
        "name": "cherry",  
        "description": "red",  
        "price": "8"  
      }
    ];
    return {list};
  }
}
