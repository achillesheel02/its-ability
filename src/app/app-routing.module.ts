import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ContributeComponent} from './components/contribute/contribute.component';
import {DemoComponent} from './components/demo/demo.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/main',
  pathMatch: 'full'
},
  { path: 'main', component: LandingComponent},
  { path: 'contribute', component: ContributeComponent},
  { path: 'demo', component: DemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
exports: [RouterModule]
})
export class AppRoutingModule { }
