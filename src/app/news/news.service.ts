import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  search(text) {
    return this.http.get<any>("https://gnews-sc.herokuapp.com/search/" + text).pipe(
      map(data => data.final)
    );
  }
}
