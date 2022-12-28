import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoosPageComponent } from './poos-page.component';
import { DoodleComponent } from '../../core/poo/doodle/doodle.component';
import { P5Component } from '../../core/poo/p5/p5.component';

@NgModule({
    imports: [CommonModule, DoodleComponent, P5Component],
    declarations: [PoosPageComponent],
})
export class PoosPageModule {}
