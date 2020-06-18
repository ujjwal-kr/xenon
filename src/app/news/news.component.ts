import { Component, OnInit } from '@angular/core';
import { WORDS } from './words';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      extras: WORDS
    }
  }

}
