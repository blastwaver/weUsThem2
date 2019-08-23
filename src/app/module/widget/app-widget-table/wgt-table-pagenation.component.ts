import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table-pagination',
  styleUrls: ['wgt-table-pagenation.component.scss'],
  templateUrl: 'wgt-table-pagenation.component.html',
})
export class WgtTablePagenationComponent implements OnInit {
  dataSource: any;
  @Input() data: [{}];
  @Input() displayedColumns: string[];
  @Input() filter ? = false;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    console.log('sdf', this.data);
    console.log('sdf', this.displayedColumns);
    this.dataSource = new MatTableDataSource<any>(JSON.parse(JSON.stringify(this.data)));
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
