import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
btn1: any;
btn2: any;
btn3: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.btn1 = 'Topics';
    this.btn2 = 'Stories';
    this.btn3 = 'About'
  }

  topics() {
    this.btn1 = 'loading..'
    return this.router.navigateByUrl('news/topics');
  }

  stories() {
    this.btn2 = 'loading..'
    return this.router.navigateByUrl('stories');
  }

  about() {
    this.btn3 = 'loading..'
    return this.router.navigateByUrl('feedback/contact');
  }

  ngOnDestroy(): void{
    this.btn1 = 'Topics'
    this.btn3 = 'About'
    this.btn2 = 'Stories'
  }

}
