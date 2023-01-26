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
      },  
      {  
        "id": 6,  
        "name": "lime",  
        "description": "green",  
        "price": "8"  
      },  
      {  
        "id": 7,  
        "name": "lemon",  
        "description": "yellow",  
        "price": "1"  
      },  
      {  
        "id": 8,  
        "name": "strawberry",  
        "description": "red",  
        "price": "15"  
      },  
      {  
        "id": 9,  
        "name": "pepper",  
        "description": "red",  
        "price": "8"  
      },  
      {  
        "id": 10,  
        "name": "pepper",  
        "description": "green",  
        "price": "5"  
      },  
      {  
        "id": 11,  
        "name": "pepper",  
        "description": "orange",  
        "price": "7"  
      },  
      {  
        "id": 12,  
        "name": "tomato",  
        "description": "red",  
        "price": "6"  
      },  
      {  
        "id": 13,  
        "name": "cucumber",  
        "description": "red",  
        "price": "3"  
      },  
      {  
        "id": 14,  
        "name": "mini cherry",  
        "description": "red",  
        "price": "13"  
      },  
      {  
        "id": 15,  
        "name": "mini lime",  
        "description": "green",  
        "price": "14"  
      }
    ];
    return {list};
  }
}
