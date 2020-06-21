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

  tech() {
    return this.http.get<any>("https://gnews-sc.herokuapp.com/tech").pipe(
      map(data => data.final)
    );
  }

  science() {
    return this.http.get<any>("https://gnews-sc.herokuapp.com/science").pipe(
      map(data => data.final)
    );
  }
  health() {
    return this.http.get<any>("https://gnews-sc.herokuapp.com/health").pipe(
      map(data => data.final)
    );
  }
  entertainment() {
    return this.http.get<any>("https://gnews-sc.herokuapp.com/entertainment").pipe(
      map(data => data.final)
    );
  }
  sports() {
    return this.http.get<any>("https://gnews-sc.herokuapp.com/sports").pipe(
      map(data => data.final)
    );
  }
  india() {
    return this.http.get<any>("https://gnews-sc.herokuapp.com/india").pipe(
      map(data => data.final)
    );
  }
}
