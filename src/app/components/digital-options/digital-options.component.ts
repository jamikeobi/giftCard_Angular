import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-options',
  templateUrl: './digital-options.component.html',
  styleUrls: ['./digital-options.component.css']
})
export class DigitalOptionsComponent {
  options = [
    { image: '../../../assets/images/gift_1.jpg', buttonText: 'Order Digital' },
    { image: '../../../assets/images/gift_2.jpg', buttonText: 'Find Out More' },
    { image: '../../../assets/images/gift_3.jpg', buttonText: 'Read Here' },
    { image: '../../../assets/images/gift_2.jpg', buttonText: 'Where to Spend' }
  ];
}
