import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
btn1: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.btn1 = 'Topics'
  }

  topics() {
    this.btn1 = 'loading..'
    return this.router.navigateByUrl('news/topics');
  }

  ngOnDestroy(): void{
    this.btn1 = 'Topics'
  }

}
