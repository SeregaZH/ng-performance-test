import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { TableColumnComponent } from './on-push-table/table-column-component';
import { TableComponent } from './on-push-table/table-component';
import { TableRowComponent } from './on-push-table/table-row-component';
import { NTableColumnComponent } from './non-on-push-table/n-table-column-component';
import { NTableComponent } from './non-on-push-table/n-table-component';
import { NTableRowComponent } from './non-on-push-table/n-table-row-component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    TableRowComponent,
    TableColumnComponent,
    TableComponent,
    NTableColumnComponent,
    NTableComponent,
    NTableRowComponent,
    routedComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
