import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-page-a',
  styleUrl: './page-a.css',
  templateUrl: './page-a.html',
})
export class PageA implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    console.log('Page A: OnDestroy');
  }
  ngOnInit(): void {
    console.log('Page A: OnInit');
  }
}
