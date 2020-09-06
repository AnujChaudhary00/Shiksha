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
import { CrouselComponent } from './components/crousel/crousel.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { MiddlePartComponent } from './components/middle-part/middle-part.component';
import { LastPartComponent } from './components/last-part/last-part.component';
import { AdmissionComponent } from './components/admission/admission.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CapmusPlacementComponent,
    CampusReportComponent,
    HomeComponent,
    FindDonarComponent,
    CrouselComponent,
    MainBodyComponent,
    MiddlePartComponent,
    LastPartComponent,
    AdmissionComponent
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
        component:MainBodyComponent
      },
      {
        path:'Donar',
        component:FindDonarComponent
      },
      {
        path:'Login',
        component: CampusReportComponent
      },
      {
        path:'Admission',
        component:AdmissionComponent
      }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
