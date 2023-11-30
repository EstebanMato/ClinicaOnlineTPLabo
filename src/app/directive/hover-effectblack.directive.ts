import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffectblack]'
})
export class HoverEffectblackDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyEffect('#000', '#fff', 'scale(1.1)'); // Negro: #000, Blanco: #fff
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyEffect('', '', '');
  }

  private applyEffect(bgColor: string, textColor: string, transform: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', textColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
  }
}

