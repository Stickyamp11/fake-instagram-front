import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[hiddeFrom700]',
  standalone: true
})
export class ResponsiveHidder700Directive implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.checkViewportWidth();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkViewportWidth();
  }

  private checkViewportWidth(): void {
    if (window.innerWidth < 700) {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'display');
    }
  }
}