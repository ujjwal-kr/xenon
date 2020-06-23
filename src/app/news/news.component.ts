import { Component, OnInit } from '@angular/core';
import { WORDS } from './words';
import * as Sentiment from 'sentiment';
import { NewsService } from './news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from './news';

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
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.param = params['id']
    });
    this.decideScoreAndFetch()
  }

  decideScoreAndFetch() {
    if (this.param == 'tech') {
        if(this.checkStorage(this.param) == false) {
          this.service.tech().subscribe((data: News[]) => {
            return this.analyze(data, -1, true)
          })
        } else {
          return this.news = JSON.parse(localStorage.getItem(this.param))
        }
    }
    if (this.param == 'ind') {
      if (this.checkStorage(this.param) == false) {
        this.service.india().subscribe((data: News[]) => {
          return this.analyze(data, 1, true)
        })
      } else {
        return this.news = JSON.parse(localStorage.getItem(this.param))
      }
    }
    if (this.param == 'sci') {
      if(this.checkStorage(this.param) == false) {
        this.service.science().subscribe((data: News[]) => {
          return this.analyze(data, -3, true)
        })
      } else {
        return this.news = JSON.parse(localStorage.getItem(this.param))
      }
    }
    if (this.param == 'heal') {
      if(this.checkStorage(this.param) == false) {
        this.service.health().subscribe((data: News[]) => {
          return this.analyze(data, 0, true)  
        })
      } else {
        return this.news = JSON.parse(localStorage.getItem(this.param))
      }
    }
    if (this.param == 'spo') {
      if(this.checkStorage(this.param) == false) {
        this.service.sports().subscribe((data: News[]) => {
          return this.analyze(data, 0, true)
        })
      } else {
        return this.news = JSON.parse(localStorage.getItem(this.param))
      }
    }
    if (this.param == 'ent') {
      if(this.checkStorage(this.param) == false) {
        this.service.entertainment().subscribe((data: News[]) => {
          return this.analyze(data, 2, true)
        })
      } else {
        return this.news = JSON.parse(localStorage.getItem(this.param))
      }
    }
    if (
    this.param !== 'ent' && 
    this.param !== 'ind' && 
    this.param !== 'tech' && 
    this.param !== 'spo' && 
    this.param !== 'heal' && 
    this.param !== 'sci'
    ){
      return this.service.search(this.param).subscribe(data => {
        this.analyze(data, 1, false);
      })
    }
    return
  }
  
  checkStorage(key) {
    if (localStorage.getItem(key)) return true;
    else return false
  }

  analyze(arr: News[], score: number, save?: boolean) {
    this.news = [];
    arr.map(item => {
      if (sentiment.analyze(item.title._text, options).score > score) {
        this.news.push(item)
      }
    })
    if (save == true) {
      return localStorage.setItem(this.param, JSON.stringify(this.news))
    }
  }

  removeItem() {
    this.news = null
    localStorage.removeItem(this.param)
    this.ngOnInit()
  }

}
