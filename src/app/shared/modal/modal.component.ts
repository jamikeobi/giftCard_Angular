import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() showModal: boolean = false;  // Controls the visibility of the modal
  @Output() closeModal = new EventEmitter<void>(); // Event emitter to close modal

  close() {
    this.closeModal.emit();
  }
}
