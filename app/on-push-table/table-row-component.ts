import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sg-table-row',
  template: `<sg-table-column *ngFor="let col of row;trackBy:trackByFn" [column]="col"></sg-table-column>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class TableRowComponent {

  @Input()
  public row: { name, number }[];

  public trackByFn(index, item) {
    return index;
  }
}
