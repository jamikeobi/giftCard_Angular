import { Component, HostListener, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PhysicalGiftCardComponent } from 'src/app/pages/physical-gift-card/physical-gift-card.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @ViewChild(PhysicalGiftCardComponent) physicalCard!: PhysicalGiftCardComponent;
  isDropdownOpen = false; // Track dropdown state
  amount:any;
  toggleDropdown(event: Event) {
    event.preventDefault(); // Prevent default navigation
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngOnInit(): void {
    this.amount = localStorage.getItem('Quantity')
      
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    const targetElement = event.target as HTMLElement;
    
    // Close dropdown if clicked outside
    if (!targetElement.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }
}
