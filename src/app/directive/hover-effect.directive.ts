import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.applyEffect('#000080', 'scale(1.1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyEffect('', '');
  }

  private applyEffect(bgColor: string, transform: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease-in-out');
  }

}
