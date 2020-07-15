import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ContributeComponent} from './components/contribute/contribute.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/main',
  pathMatch: 'full'
},
  { path: 'main', component: LandingComponent},
  { path: 'contribute', component: ContributeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
exports: [RouterModule]
})
export class AppRoutingModule { }
