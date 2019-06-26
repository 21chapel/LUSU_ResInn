import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TbComponent } from './tb/tb.component';
import { DetailsComponent } from './tb/details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'thunderbay', component: TbComponent},
  { path: 'thunderbay/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
