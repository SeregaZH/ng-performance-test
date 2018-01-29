import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
             selector: 'sg-n-table-column',
             template: `<div 
               class="sg-column" 
               [ngClass]="{ 'red': column.number <= 0, 'green': column.number > 0 }"
               [title]="column.name">
               {{column.number}}
             </div>`,
             encapsulation: ViewEncapsulation.None
})

export class NTableColumnComponent {

  @Input()
  public column: { name, number };
}
