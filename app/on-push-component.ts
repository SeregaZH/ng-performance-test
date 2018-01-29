import { Component } from '@angular/core';

@Component({
  selector: 'sg-on-push',
  template: `
    <button (click)="reverseOdd()">Reverse Odd</button>
    <sg-table [rows]="rows"></sg-table>`
})
export class OnPushComponent {
  private static rowNumber = 300;
  private static columnNumber = 40;
  private static rowsAffectedDivider = 1;

  public rows: any[] = OnPushComponent.generateRows();

  public static generateRows(): any[] {
    let res = [];
    for (let i = 0; i < OnPushComponent.rowNumber; i++) {
      res.push(OnPushComponent.generateColumns());
    }
    return res;
  }

  public static generateColumns(): any[] {
    let res = [];
    for (let i = 0; i < OnPushComponent.columnNumber; i++) {
      res.push({ name: `col-${i}`, number: Math.floor(Math.random() * (10 - (-10))) - 10 });
    }
    return res;
  }

  public reverseOdd() {
    let res = [];
    for (let i = 0; i < OnPushComponent.rowNumber; i++) {
      res.push(i % OnPushComponent.rowsAffectedDivider > 0 ? this.rows[i] : this.reverseOddCell(this.rows[i]));
    }
    this.rows = res;
  }

  public reverseOddCell(row: { name, number }[]): any[] {
    let res = [];
    for (let i = 0; i < OnPushComponent.columnNumber; i++) {
      res.push({ name: row[i].name, number: row[i].number * -1 });
    }
    return res;
  }

/*  public reverseOdd() {
    for (let i = 0; i < OnPushComponent.rowNumber; i++) {
      if (i % OnPushComponent.rowsAffectedDivider === 0) {
        this.reverseOddCell(this.rows[i]);
      }
    }
  }

  public reverseOddCell(row: { name, number }[]): void {
    for (let i = 0; i < OnPushComponent.columnNumber; i++) {
      if (i % OnPushComponent.rowsAffectedDivider === 0) {
        row[i].number *= -1;
      }
    }
  }*/
}
