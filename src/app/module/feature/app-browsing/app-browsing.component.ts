import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TestService } from 'src/api/test.service';


/** @title Responsive sidenav */
@Component({
  selector: 'app-bowsing',
  templateUrl: 'app-browsing.component.html',
  styleUrls: ['app-browsing.component.scss'],
})
export class AppBrowsingComponent implements OnInit, OnDestroy {

  // state$: Observable<object>;
  symbol;
  alphabet;
  showingSymbol;
  buttonDisable = true;

  constructor(public router: Router,
              private testService: TestService) {}

  ngOnInit() {
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    this.testService.getAllData().subscribe(res => {
      this.symbol = Object.keys(res);
      this.showingSymbol = this.symbol;
      this.buttonDisable = false;
    });
  }

  onClickButton(char?) {
    if (char) {
      const firstChar = char.toUpperCase();
      this.showingSymbol = this.symbol.filter(sym => {
        return sym.charAt(0) === firstChar;
      });
    } else {
      this.showingSymbol = this.symbol;
    }

  }

  onClickSymbol(sym) {
    this.router.navigate(['symbol'] , {queryParams: {symbol: sym}});
  }


  ngOnDestroy() {

  }

}
