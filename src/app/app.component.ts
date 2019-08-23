import { Component, OnInit } from '@angular/core';
import { LinkItem } from './Model/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weusthem-test';
  menuList: LinkItem[];
  constructor() {
  }
  ngOnInit() {

    this.menuList = [
      {title: 'Landing', link: 'landing'},
      {title: 'Browsing', link: 'browsing'},
      {title: 'Symbol', link: 'symbol'},
      {title: 'Contact Us', link: 'contact-us'},
    ];
  }
}
