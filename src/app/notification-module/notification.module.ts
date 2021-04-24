import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from '../views/register-form/register-form.component';
import { RegisterButtonComponent } from '../views/register-button/register-button.component';



@NgModule({
  declarations: [RegisterFormComponent, RegisterButtonComponent],
  imports: [
    CommonModule
  ]
})
export class NotificationModule { }
