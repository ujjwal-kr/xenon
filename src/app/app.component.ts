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


  async ngOnInit() {
    const options = {
      extras: WORDS
    }
    if (await !window.localStorage.getItem("news")){
      this.http.get('https://gnews-sc.herokuapp.com').subscribe( (data: any) => {
        this.news = data.final;
        this.final = [];
        this.news.map(item => {
          const sentiment = new Sentiment();
          if (sentiment.analyze(item.title._text, options).score > 0) {
              this.final.push(item)
          }
        })
        this.saveFinal();
      })
    } else {
      this.final = await JSON.parse(window.localStorage.getItem("news"))
    }
  }

  saveFinal() {
      window.localStorage.setItem("news", JSON.stringify(this.final))
  }
}
