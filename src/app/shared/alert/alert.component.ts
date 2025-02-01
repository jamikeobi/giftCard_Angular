import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string = '';  // Alert message
  @Input() type: string = 'info'; // Alert type (info, success, error, etc.)
}
