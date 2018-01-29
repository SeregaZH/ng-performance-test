import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'sg-table-column',
             template: `<div 
               class="sg-column" 
               [ngClass]="{ 'red': column.number <= 0, 'green': column.number > 0 }"
               [title]="column.name">
               {{column.number}}
             </div>`,
             changeDetection: ChangeDetectionStrategy.OnPush,
             encapsulation: ViewEncapsulation.None
})

export class TableColumnComponent {

  @Input()
  public column: { name, number };
}
