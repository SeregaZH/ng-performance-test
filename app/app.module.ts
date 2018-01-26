import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { TableColumnComponent } from './table-column-component';
import { TableComponent } from './table-component';
import { TableRowComponent } from './table-row-component';

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
    routedComponents
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
