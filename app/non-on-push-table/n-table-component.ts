import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'sg-n-table',
             template: `
               <ng-template ngFor trackBy="trackByFn" let-item="$implicit" [ngForOf]="rows">
                 <sg-n-table-row [row]="item" class="sg-row"></sg-n-table-row>
               </ng-template>`,
             styleUrls: ['app/non-on-push-table/n-table.component.css'],
             encapsulation: ViewEncapsulation.None
           })

export class NTableComponent {

  @Input()
  public rows: { name, number }[];

  @HostBinding('class.sg-table')
  cls = true;

  public trackByFn(index, item) {
    return index;
  }
}
