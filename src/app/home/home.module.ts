import { NgModule } from '@angular/core';
import { SigninModule } from './signin/signin.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SigninModule
  ]
})
export class HomeModule {

}
