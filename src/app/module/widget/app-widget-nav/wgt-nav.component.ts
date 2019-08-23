import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';

// Model
import { LinkItem } from 'src/app/Model/models';

@Component({
  selector: 'app-nav',
  templateUrl: './wgt-nav.component.html',
  styleUrls: ['./wgt-nav.component.scss']
})
export class WgtNavComponent {

  @Input() linkItems: LinkItem [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        return result.matches;
      }),
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}

