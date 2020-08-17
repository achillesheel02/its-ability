import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {ContributeComponent} from './components/contribute/contribute.component';
import {DemoComponent} from './components/demo/demo.component';
import {BlogComponent} from './components/blog/blog.component';
import {SurveyComponent} from './components/survey/survey.component';
import {LoginComponent} from './components/auth/login/login.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SignUpComponent} from './components/auth/sign-up/sign-up.component';


const routes: Routes = [
  { path: '',
  redirectTo: '/main',
  pathMatch: 'full'
},
  { path: 'main', component: LandingComponent},
  { path: 'contribute', component: ContributeComponent},
  { path: 'demo', component: DemoComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'survey', component: SurveyComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
exports: [RouterModule]
})
export class AppRoutingModule { }
