import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DoodleComponent } from '../../core/poo/doodle/doodle.component';
import { PooPageComponent } from './poo-page.component';

@NgModule({
    imports: [BrowserModule, DoodleComponent],
    declarations: [PooPageComponent],
})
export class PooPageModule {}
