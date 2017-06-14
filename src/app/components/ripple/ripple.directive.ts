import { DomRenderer } from './../common/dom';
import { OnInit, AfterViewInit, HostListener, Directive, ElementRef } from '@angular/core';

@Directive({
    selector:'[bRipple]',
    providers:[DomRenderer]
})
export class RippleDirective implements OnInit,AfterViewInit{
    container:HTMLDivElement;
    @HostListener('click',['$event'])
    onClick(e:Event){
        this.ripple(e,this.container);
    }

    constructor(private er:ElementRef,private domRenderer:DomRenderer){}

    ngOnInit() {        
    }

    ngAfterViewInit() {
        this.container=this.er.nativeElement;
        this.domRenderer.addClass(this.container,'ripple-effect');
    }

    ripple(event:any,$this:HTMLDivElement){
        let x=event.pageX||document.documentElement.scrollLeft+document.body.scrollLeft+event.clientX;
        let y=event.pageY||document.documentElement.scrollTop+document.body.scrollTop+event.clientY;
        const wx=$this.offsetWidth;
        const rect=this.domRenderer.getRect(this.container);
        x=x-rect.left-wx/2;
        y=y-rect.top-wx/2;
        const ripple=document.createElement('span');
        ripple.className='ripple';
        const firstChild=$this.firstChild;
        if(firstChild){
            $this.insertBefore(ripple,firstChild);
        }else{
            $this.appendChild(ripple);
        }
        ripple.style.cssText='width:'+wx+'px;height:'+wx+'px;top:'+y+'px;left:'+x+'px;';
        ripple.classList.add('rippleEffect');
        this.domRenderer.animationEnd(ripple,function(){
            this.parentNode.removeChild(ripple);
        });
    }
}