import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PooPageComponent } from './pages/poo-page/poo-page.component';
import { PooPageModule } from './pages/poo-page/poo-page.module';
import { PoosPageModule } from './pages/poos-page/poos-page.module';
import { PoosPageComponent } from './pages/poos-page/poos-page.component';

const routes: Routes = [
    { path: 'test', component: PooPageComponent },
    { path: 'test2', component: PoosPageComponent },
    { path: 'home', loadChildren: () => import('./pages/poos-page/poos-page.module').then((m) => m.PoosPageModule) },
    { path: 'poo', loadChildren: () => import('./pages/poo-page/poo-page.module').then((m) => m.PooPageModule) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes), PooPageModule, PoosPageModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
