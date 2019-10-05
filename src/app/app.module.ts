import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetModule } from './modules/sheet/sheet.module';
import { SheetComponent } from './modules/sheet/components/sheet/sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
