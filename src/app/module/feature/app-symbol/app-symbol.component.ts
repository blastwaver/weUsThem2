import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TestService } from 'src/api/test.service';


/** @title Responsive sidenav */
@Component({
  selector: 'app-symbol',
  templateUrl: 'app-symbol.component.html',
  styleUrls: ['app-symbol.component.scss'],
})
export class AppSymbolComponent implements OnInit, OnDestroy {


  state$: Observable<object>;
  targetedSymbolData;
  data;
  symbol;
  displayedColumns;
  constructor(public activatedRoute: ActivatedRoute,
              private testService: TestService,) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.symbol = param.symbol;
      this.getData(this.symbol);
    });
  }

  getData(symbol?: string) {
      this.testService.getAllData().subscribe(res => {
        if (symbol) {
          this.data = res[symbol];
        } else {
          const symbols = Object.keys(res);
          const ranNum = Math.floor(Math.random() * 10);
          this.symbol = symbols[ranNum];
          this.data = res[symbols[ranNum]];
        }
        this.getTableData();
      });

  }

  getTableData(){
    this.displayedColumns = Object.keys(this.data[0]);
    console.log(this.displayedColumns);
  }

  ngOnDestroy() {

  }

}
