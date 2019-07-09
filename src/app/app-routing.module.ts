import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TbComponent } from './tb/tb.component';
import { DetailsComponent } from './tb/details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/events'},
  { path: '**', redirectTo: '/events'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
