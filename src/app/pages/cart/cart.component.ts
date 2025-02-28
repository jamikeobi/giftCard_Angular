import { Component } from '@angular/core';

interface CartItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

declare var bootstrap: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [
    {
      name: 'Item 1',
      image: '../../../assets/images/physical_giftcard/taxfree.jpg',
      price: 5000,
      quantity: 1
    },
    {
      name: 'Item 2',
      image: '../../../assets/images/physical_giftcard/chipPin.jpg',
      price: 3000,
      quantity: 2
    }
  ];

  whatsappLink: string = 'https://wa.me/2349049283653?text=Hello,%20I%20would%20like%20to%20confirm%20my%20order.';
  showSuccessToast: boolean = false;

  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateCart() {
    alert('Cart updated successfully!');
  }

  continueShopping() {
    alert('Continue shopping clicked!');
  }

  proceedToCheckout() {
    alert('Proceeding to checkout!');
  }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      alert('File selected: ' + file.name);
    }
  }

  confirmCheckout() {
    // Hide the checkout modal
    const checkoutModal = document.getElementById('checkoutModal');
    const modalInstance = bootstrap.Modal.getInstance(checkoutModal);
    modalInstance.hide();

    // Show the success message modal
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
  }


  closeSuccessModal() {
    const successModal = document.getElementById('successModal');
    const modalInstance = bootstrap.Modal.getInstance(successModal);
  
    if (modalInstance) {
      modalInstance.hide();
    }
  
    // Manually remove any leftover backdrop
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }
  }
    
}
