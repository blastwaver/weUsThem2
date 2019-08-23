import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';


/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-table-selection',
  styleUrls: ['wgt-table-selection.component.scss'],
  templateUrl: 'wgt-table-selection.component.html',
})
export class WgtTableSelectionComponent implements OnInit {
  dataSource: any;
  selection = new SelectionModel<any>(true, []);
  @Input() data: [{}];
  @Input() filter ? = false;
  @Input() displayedColumns: string[];


  ngOnInit() {
    if (this.displayedColumns || this.displayedColumns.length > 0 ) {
      this.displayedColumns = JSON.parse(JSON.stringify(this.displayedColumns));
      this.displayedColumns.unshift('select');
    }

    this.dataSource = new MatTableDataSource<any>(JSON.parse(JSON.stringify(this.data)));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
