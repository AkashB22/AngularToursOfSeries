import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highLightColor: string;
  @Input() defaultColor: string;

  constructor(private el : ElementRef) { }

  @HostListener('mouseenter') onMouseEnters(){
    this.hightChangeColor(this.highLightColor || this.defaultColor || 'red')
  }

  @HostListener('mouseleave') onMouseLeaves(){
    this.hightChangeColor(null);
  }

  private hightChangeColor(color: string){
    this.el.nativeElement.style.color = color;
  }
}
