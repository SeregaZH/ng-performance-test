import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sg-n-table-row',
  template: `<sg-n-table-column *ngFor="let col of row;trackBy:trackByFn" [column]="col"></sg-n-table-column>`,
  encapsulation: ViewEncapsulation.None
})

export class NTableRowComponent {

  @Input()
  public row: { name, number }[];

  public trackByFn(index, item) {
    return index;
  }
}
