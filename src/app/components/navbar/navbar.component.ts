import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDropdownOpen = false; // Track dropdown state

  toggleDropdown(event: Event) {
    event.preventDefault(); // Prevent default navigation
    this.isDropdownOpen = !this.isDropdownOpen;
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
