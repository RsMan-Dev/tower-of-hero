import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./heroes/hero-detail/hero-detail.component";

const routes: Routes = [
  {path: '' , component: HeroesComponent},
  {path: 'details/:hero_id' , component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
