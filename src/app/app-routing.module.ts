import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerHomeComponent } from './pages/employer-home/employer-home.component';
import { AssitBoxComponent } from './shared/assit-box/assit-box.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {IconsModule} from "../app/icons/icons.module";
import {ClaimEmployeeStepOneComponent} from './pages/claim-employee-step-one/claim-employee-step-one.component';


const routes: Routes = [
      {path:"", component:EmployerHomeComponent},
      {path:"claim-employee-step-one", component:ClaimEmployeeStepOneComponent}


];

@NgModule({
  declarations:[
    EmployerHomeComponent,
    AssitBoxComponent
  ],
  imports: [RouterModule.forRoot(routes), FlexLayoutModule, IconsModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
