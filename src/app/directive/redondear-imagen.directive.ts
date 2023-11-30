import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedondearImagen]'
})
export class RedondearImagenDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '50%');
  }
}

