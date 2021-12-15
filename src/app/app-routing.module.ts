import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationformComponent } from './main-component/registrationform/registrationform.component';
// import { Route } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Registration',
    pathMatch: 'full',
  },
  {
    path: 'Registration',
    component: RegistrationformComponent,
  },
  {
    path: '**',
    redirectTo: 'Registration',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
