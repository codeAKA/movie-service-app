import { Directive, EventEmitter, HostListener, ElementRef, Output } from '@angular/core';

@Directive({
  selector: '[appSrollable]'
})
export class SrollableDirective {

  @Output() scrollPosition = new EventEmitter();

  constructor(public el: ElementRef) {
    console.log(el);
    console.log(el.nativeElement.offsetHeight);
  }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    try {
      const top = event.target.scrollTop;
      const height = this.el.nativeElement.scrollHeight;
      const offset = this.el.nativeElement.offsetHeight;

      if (top > height - offset - 1) {
        this.scrollPosition.emit('bottom');
      }
      if (top === 0) {
        this.scrollPosition.emit('top');
      }
    } catch (err) { }
  }

  @HostListener('click', ['$event'])
  onClickDirective(event) {
    this.scrollPosition.emit(event.target.scrollTop);
    this.scrollPosition.emit(event.target);
    this.scrollPosition.emit(this.el.nativeElement);
    console.log(this.el.nativeElement.offsetHeight);
    this.scrollPosition.emit(this.el.nativeElement.offsetHeight);
    this.scrollPosition.emit(this.el.nativeElement.scrollHeight);
  }

}
