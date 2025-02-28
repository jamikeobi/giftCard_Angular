import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-fav-slider',
  templateUrl: './fav-slider.component.html',
  styleUrls: ['./fav-slider.component.css']
})
export class FavSliderComponent implements AfterViewInit {
  images = [
    '../../../assets/images/physical_giftcard/taxfree.jpg',
    '../../../assets/images/physical_giftcard/blackcard.jpg',
    '../../../assets/images/physical_giftcard/chipPin.jpg',
    '../../../assets/images/physical_giftcard/birthday.jpg',
    '../../../assets/images/physical_giftcard/perfectCouple.jpg',
    // '../../../assets/images/physical_giftcard/',
    '../../../assets/images/giftcard/giftcard2.jpg',
    '../../../assets/images/gift_8.webp',
    '../../../assets/images/giftcard/giftcard1.jpg',
  ];

  @ViewChild('slider') slider!: ElementRef;
  currentIndex = 0;
  itemsPerSlide = 5; // Default number of images displayed at once

  ngAfterViewInit() {
    this.updateItemsPerSlide(); // Set correct initial value
    this.updateSlider();
  }

  @HostListener('window:resize') 
  onResize() {
    this.updateItemsPerSlide();
    this.updateSlider();
  }

  updateItemsPerSlide() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) {
      this.itemsPerSlide = 2; // Show 2 images on very small screens
    } else if (screenWidth <= 768) {
      this.itemsPerSlide = 3; // Show 3 images on tablets
    } else {
      this.itemsPerSlide = 5; // Default (larger screens)
    }
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - this.itemsPerSlide) {
      this.currentIndex++;
      this.updateSlider();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlider();
    }
  }

  updateSlider() {
    const sliderElement = this.slider.nativeElement as HTMLElement;
    const itemWidth = sliderElement.clientWidth / this.itemsPerSlide;
    sliderElement.style.transform = `translateX(-${this.currentIndex * itemWidth}px)`;
  }
}
