import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'sg-table',
             template: `
               <ng-template ngFor trackBy="trackByFn" let-item="$implicit" [ngForOf]="rows">
                 <sg-table-row [row]="item" class="sg-row"></sg-table-row>
               </ng-template>`,
             changeDetection: ChangeDetectionStrategy.OnPush,
             styleUrls: ['app/table.component.css'],
             encapsulation: ViewEncapsulation.None
           })

export class TableComponent {

  @Input()
  public rows: { name, number }[];

  @HostBinding('class.sg-table')
  cls = true;

  public trackByFn(index, item) {
    return index;
  }
}
