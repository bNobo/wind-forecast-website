import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../features/notification/register-form/register-form.component';
import { RegisterButtonComponent } from '../features/notification/register-button/register-button.component';



@NgModule({
  declarations: [RegisterFormComponent, RegisterButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class NotificationModule { }
