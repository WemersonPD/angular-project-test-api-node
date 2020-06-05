import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vmenssage',
  templateUrl: './vmenssage.component.html'
})
export class VmenssageComponent {
  @Input() text = ''

}
