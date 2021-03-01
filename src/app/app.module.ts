import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LayoutComponent} from './shared/layout/layout.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {TopnavComponent} from './shared/layout/topnav/topnav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClaimEmployeeStepOneComponent } from './pages/claim-employee-step-one/claim-employee-step-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClaimSchemeDetailsStepTwoComponent } from './pages/claim-employee-step-one/claim-scheme-details-step-two/claim-scheme-details-step-two.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopnavComponent,
    FooterComponent,
    ClaimEmployeeStepOneComponent,
    ClaimSchemeDetailsStepTwoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
