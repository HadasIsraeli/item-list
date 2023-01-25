import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) { }

  // list_url = 'assets/json/data.json';
  list_url = 'api/list';

  item_list: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get_data() {
    this.http.get(this.list_url).subscribe((res) => {
      this.item_list = res;
    });
  }

  add_item(item: any) {
    this.item_list.push(item);
    this.http.post(this.list_url, item, this.httpOptions);
  }

  edit_item(item: any) {
    let url = this.list_url+'/'+(item.id);
    this.http.put(url, item, this.httpOptions).subscribe((res) => {
      console.log(res);
      this.get_data();
    }
     
    );
  }

  sort(type: any) {
    if (type == 'name') {
      this.item_list.sort(function (a: any, b: any) {
        return (a[type]).toLowerCase() < (b[type]).toLowerCase() ? -1 : 1;
      });
    } else {
      this.item_list.sort(function (a: any, b: any) {
        return parseFloat(a[type]) < parseFloat(b[type]) ? -1 : 1;
      });
    }

  }
}
