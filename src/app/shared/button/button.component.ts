import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string = '';        // Button text
  @Input() type: string = 'primary';  // Button type (primary, secondary, etc.)
  @Input() disabled: boolean = false; // Button disabled state
  @Input() onClick: Function = () => {}; // Button click event
}
