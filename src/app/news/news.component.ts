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
  param: string;

  constructor(
    private service: NewsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      this.param = params['id']
    });
  }


  ngOnInit(): void {
    this.decideScoreAndFetch()
  }

  decideScoreAndFetch() {
    if (this.param == 'tech') {
      this.service.tech().subscribe((data: News[]) => {
        return this.analyze(data, -1)
      })
    }
    if (this.param == 'ind') {
      this.service.india().subscribe((data: News[]) => {
        return this.analyze(data, 1)
      })
    }
    if (this.param == 'sci') {
      this.service.science().subscribe((data: News[]) => {
        return this.analyze(data, -3)
      })
    }
    if (this.param == 'heal') {
      this.service.health().subscribe((data: News[]) => {
        return this.analyze(data, 0)  
      })
    }
    if (this.param == 'spo') {
      this.service.sports().subscribe((data: News[]) => {
        return this.analyze(data, 0)
      })
    }
    if (this.param == 'ent') {
      this.service.entertainment().subscribe((data: News[]) => {
        return this.analyze(data, 2)
      })
    }
    if (this.param !== 'ent' && this.param !== 'ind' && this.param !== 'tech' && this.param !== 'spo' && this.param !== 'heal' && this.param !== 'sci'){
      return this.service.search(this.param).subscribe(data => {
        this.analyze(data, 1);
      })
    }
  }


  analyze(arr: News[], score: number) {
    this.news = [];
    arr.map(item => {
      if (sentiment.analyze(item.title._text, options).score > score) {
        this.news.push(item)
      }
    })
    console.log(this.news)
  }

}
