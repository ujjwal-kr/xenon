import { Component, OnInit } from '@angular/core';
import { WORDS } from './words';
import * as Sentiment from 'sentiment';
import { NewsService } from './news.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { News } from './news';
import { Observable } from 'rxjs';
const sentiment = new Sentiment();
const options = {
  extras: WORDS
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
news: News[];
news$: Observable<News[]>;
  constructor(
    private service: NewsService,
    private route: ActivatedRoute
  ) { }
  

  ngOnInit(): void {
    this.news$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.search(params.get('id')))
    );

    this.analyze();
  }

  analyze() {
    this.news$.subscribe(data => {
      data.map(data => {
        console.log(sentiment.analyze(data.title, options))
      })
    })
  }

}
