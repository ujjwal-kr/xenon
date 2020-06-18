import { Component, OnInit } from '@angular/core';
import * as Sentiment from 'sentiment';
import { HttpClient } from '@angular/common/http';
import { WORDS } from './words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'xenon';
  news: any;
  final: any;
  constructor(
    private http: HttpClient
  ){}
// 3hr === 10800000ms
  async ngOnInit() {
    const options = {
      extras: WORDS
    }
    let payload = await JSON.parse(window.localStorage.getItem("news"));
    if (payload) {
      if (Date.now() - payload.time >= 3600000) {
        window.localStorage.removeItem("news");
        payload = null;
      }
    }
    if (!payload){
      this.http.get('https://gnews-sc.herokuapp.com').subscribe( (data: any) => {
        this.news = data.final;
        this.final = [];
        this.news.map(item => {
          const sentiment = new Sentiment();
          if (sentiment.analyze(item.title._text, options).score > 1) {
              this.final.push(item)
          }
        })
        this.saveFinal();
      })
    } else {
      this.final = payload.news;
    }
  }

  saveFinal() {
    const data = {
      news: this.final,
      time: Date.now()
    }
    window.localStorage.setItem("news", JSON.stringify(data));
  }
}
