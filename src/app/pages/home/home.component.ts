import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  talkToTeam() {
    alert('Redirecting to contact form...');
  }

  orderFavourites() {
    alert('Redirecting to Order Favourites page...');
  }

  options = [
    { image: '../../../assets/images/gift_1.jpg', buttonText: 'Order Digital' },
    { image: '../../../assets/images/gift_2.jpg', buttonText: 'Find Out More' },
    { image: '../../../assets/images/gift_3.jpg', buttonText: 'Read Here' },
    { image: '../../../assets/images/gift_2.jpg', buttonText: 'Where to Spend' }
  ];
}
