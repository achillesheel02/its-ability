import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './components/landing/landing.component';
import {ParticlesModule} from 'ngx-particle';
import { FooterComponent } from './components/footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import { ContributeComponent } from './components/contribute/contribute.component';
import { DemoComponent } from './components/demo/demo.component';
import {WebcamModule} from 'ngx-webcam';
import {FormsModule} from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';
import {FileUploadModule} from 'ng2-file-upload';
import { SurveyComponent } from './components/survey/survey.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    ContributeComponent,
    DemoComponent,
    BlogComponent,
    SurveyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FileUploadModule,
    ParticlesModule,
    FlexLayoutModule,
    WebcamModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
