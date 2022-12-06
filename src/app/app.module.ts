import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PooComponent } from './core/poo/poo.component';
import { PooPageComponent } from './pages/poo-page/poo-page.component';

@NgModule({
  imports: [BrowserModule, PooComponent],
  declarations: [AppComponent, PooPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
