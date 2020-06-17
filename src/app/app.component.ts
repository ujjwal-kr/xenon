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
  final: any = [];
  constructor(
    private http: HttpClient
  ){}


  ngOnInit() {
    const options = {
      extras: WORDS
    }
    this.http.get('https://gnews-sc.herokuapp.com').subscribe( (data: any) => {
      this.news = data.final;
      this.news.map(item => {
        const sentiment = new Sentiment();
        if (sentiment.analyze(item.title._text, options).score > .5) {
            this.final.push(item)
        }
      })
    })
  
  }
}
