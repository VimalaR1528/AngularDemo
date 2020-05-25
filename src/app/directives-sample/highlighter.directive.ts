import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  // constructor(private eleref:ElementRef) { 
  //   eleref.nativeElement.style.backgroundColor="yellow";
  // }

  constructor(private eleref:ElementRef) {}
  
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight("blue");
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null);
  }
    private  highlight(color:string){
      this.eleref.nativeElement.style.backgroundColor=color;
    
  }


}
