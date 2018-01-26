import { Component } from '@angular/core';

@Component({
  selector: 'sg-on-push',
  template: `
    <button (click)="reverseOdd()">Reverse Odd</button>
    <sg-table [rows]="rows">
    
  </sg-table>`
})
export class OnPushComponent {
    public rows: any[] = OnPushComponent.generateRows();

    public static generateRows(): any[] {
      let res = [];
      for (let i = 0; i < 600; i++) {
        res.push(OnPushComponent.generateColumns());
      }
      return res;
    }

    public static generateColumns(): any[] {
      let res = [];
      for (let i = 0; i < 40; i++) {
        res.push({ name: `col-${i}`, number: Math.floor(Math.random() * (10 - (-10))) - 10 });
      }
      return res;
    }

    public reverseOdd() {
      let res = [];
      for (let i = 0; i < 600; i++) {
        res.push(i % 2 > 0 ? this.rows[i] : this.reverseOddCell(this.rows[i]));
      }
      this.rows = res;
    }

    public reverseOddCell(row: {name, number}[]): any[] {
      let res = [];
      for (let i = 0; i < 40; i++) {
        res.push(i % 2 > 0 ? row[i] : { name: row[i].name, number: row[i].number * -1 });
      }
      return res;
    }
}
