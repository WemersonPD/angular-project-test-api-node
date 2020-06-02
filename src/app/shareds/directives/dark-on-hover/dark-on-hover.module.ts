import { NgModule } from '@angular/core';
import { DarOnHoverDirective } from './dark-on-hover.directive';


@NgModule({
  declarations: [
    DarOnHoverDirective
  ],
  exports: [
    DarOnHoverDirective
  ]
})
export class DarkOnHoverModule {

}
