import { Component } from '@angular/core';

@Component({
             selector: 'sg-n-on-push',
             template: `
               <button (click)="reverseOdd()">Reverse Odd</button>
               <sg-n-table [rows]="rows"></sg-n-table>`
           })
export class NonOnPushComponent {
  private static rowNumber = 300;
  private static columnNumber = 40;
  private static rowsAffectedDivider = 1;

  public rows: any[] = NonOnPushComponent.generateRows();

  public static generateRows(): any[] {
    let res = [];
    for (let i = 0; i < NonOnPushComponent.rowNumber; i++) {
      res.push(NonOnPushComponent.generateColumns());
    }
    return res;
  }

  public static generateColumns(): any[] {
    let res = [];
    for (let i = 0; i < NonOnPushComponent.columnNumber; i++) {
      res.push({ name: `col-${i}`, number: Math.floor(Math.random() * (10 - (-10))) - 10 });
    }
    return res;
  }

  public reverseOdd() {
    for (let i = 0; i < NonOnPushComponent.rowNumber; i++) {
      if (i % NonOnPushComponent.rowsAffectedDivider === 0) {
        this.reverseOddCell(this.rows[i]);
      }
    }
  }

  public reverseOddCell(row: { name, number }[]) {
    for (let i = 0; i < NonOnPushComponent.columnNumber; i++) {
      if (i % NonOnPushComponent.rowsAffectedDivider === 0) {
        row[i].number *= -1;
      }
    }
  }
}
