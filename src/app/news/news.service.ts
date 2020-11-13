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

  search(text: any) {
    return this.http.get<any>("https://positive-vibes-server.herokuapp.com/xenon/search/" + text).pipe(
      map(data => data.final)
    );
  }

  tech() {
    return this.http.get<any>("https://positive-vibes-server.herokuapp.com/xenon/tech").pipe(
      map(data => data.final)
    );
  }

  science() {
    return this.http.get<any>("https://positive-vibes-server.herokuapp.com/xenon/science").pipe(
      map(data => data.final)
    );
  }
  health() {
    return this.http.get<any>("https://positive-vibes-server.herokuapp.com/xenon/health").pipe(
      map(data => data.final)
    );
  }
  entertainment() {
    return this.http.get<any>("https://positive-vibes-server.herokuapp.com/xenon/entertainment").pipe(
      map(data => data.final)
    );
  }
  sports() {
    return this.http.get<any>("https://positive-vibes-server.herokuapp.com/xenon/sports").pipe(
      map(data => data.final)
    );
  }
  india() {
    return this.http.get<any>("https://positive-vibes-server.herokuapp.com/xenon/india").pipe(
      map(data => data.final)
    );
  }
}
