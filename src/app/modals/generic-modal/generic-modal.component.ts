import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generic-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-modal.component.html',
  styleUrl: './generic-modal.component.scss'
})
export class GenericModalComponent {
  @ViewChild('modalContent') modalContent!: ElementRef;
  @Output() closeGeneric = new EventEmitter<void>();

  isVisible = false;
  constructor(){

  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
    this.closeGeneric.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.hide();
    }
  }
}
