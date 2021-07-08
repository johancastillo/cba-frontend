import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public scroll = 0;
  public renderer2: Renderer2;


  // Elements html

  constructor(renderer2: Renderer2) {

  }

  @ViewChild("asNavigation") public navigation: ElementRef;

  ngOnInit(): void {
    // Navigation animate
    addEventListener('scroll', () => {
        let navEl = this.navigation.nativeElement
        this.scroll = window.scrollY;

        if(this.scroll > 110){
          navEl.classList.add('activate')
        }else{
          navEl.classList.remove('activate')
        }

    })

  }

}
