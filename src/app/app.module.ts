import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { DoodleComponent } from './core/poo/doodle/doodle.component';
import { PooPageComponent } from './pages/poo-page/poo-page.component';
import { PoosPageComponent } from './pages/poos-page/poos-page.component';
import { P5Component } from './core/poo/p5/p5.component';

@NgModule({
    imports: [BrowserModule, FontAwesomeModule, DoodleComponent],
    declarations: [AppComponent, PoosPageComponent, PooPageComponent, P5Component],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(faArrowLeft, faArrowRight);
    }
}
