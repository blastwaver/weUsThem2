import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { TestService } from 'src/api/test.service';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';


/** @title Responsive sidenav */
@Component({
  selector: 'app-landing',
  templateUrl: 'app-landing.component.html',
  styleUrls: ['app-landing.component.scss'],
})
export class AppLandingComponent implements OnInit, OnDestroy {

  symbol: string [];
  showingSymbol: string [];
  symbolControl: AbstractControl;
  landingFormGroup: FormGroup = new FormGroup ({
    symbol: new FormControl(),
  });

  constructor(private testService: TestService,
              private router: Router) {}

  ngOnInit() {

    this.symbolControl = this.landingFormGroup.get('symbol');

    this.symbolControl.disable();

    this.testService.getAllData().subscribe(res => {
      this.symbol = Object.keys(res);
      this.symbolControl.enable();

    });

    this.symbolControl.valueChanges.subscribe(val => {
      if (val === null) {
        return;
      }
      this.filterSymbols(val.toUpperCase());
    });
  }

  filterSymbols(val) {
    this.showingSymbol = this.symbol.filter(sym => {
        return sym.includes(val);
    });

    if (val.length === 0) {
      this.showingSymbol = [];
    }
    console.log(this.showingSymbol)
  }

  onClickSymbol(sym) {
    // this.router.navigateByUrl('browsing', { state: { symbol: sym }});
    this.router.navigate(['symbol'] , {queryParams:{symbol: sym}});
  }


  ngOnDestroy() {

  }

}
