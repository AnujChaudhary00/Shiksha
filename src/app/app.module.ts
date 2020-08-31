import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CapmusPlacementComponent } from './components/capmus-placement/capmus-placement.component';
import { FormsModule } from '@angular/forms';
import { CampusReportComponent } from './components/campus-report/campus-report.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FindDonarComponent } from './components/find-donar/find-donar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CapmusPlacementComponent,
    CampusReportComponent,
    HomeComponent,
    FindDonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
         path: 'Register',
         component:CapmusPlacementComponent
      },
      {
        path:'Ab',
        component:HeaderComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'Donar',
        component:FindDonarComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
