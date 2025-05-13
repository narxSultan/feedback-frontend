import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, provideHttpClient, withFetch} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'; // Ensure this is the correct path to the module
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReportsComponent } from './reports/reports.component';
import { ComponentsComponent } from './components/components.component';
import { LinersComponent } from './liners/liners.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AppComponent,
    FeedbackFormComponent,
    LoginComponent,
    RegisterComponent,
    ReportsComponent,
    ComponentsComponent,
    LinersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,// Ensure the module is correctly imported and added here
    CommonModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

