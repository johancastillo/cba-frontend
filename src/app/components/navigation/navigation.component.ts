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
  @ViewChild("asMenu") public menu: ElementRef;
  @ViewChild("menuColor") public menuColor: ElementRef;
  @ViewChild("menuWhite") public menuWhite: ElementRef;

  ngOnInit(): void {
    // Navigation animate
    addEventListener('scroll', () => {
        let navEl = this.navigation.nativeElement
        //console.log(window.scrollY)
        //console.log(this.scroll)

        if(window.scrollY == 0){
          navEl.classList.remove('deactivate')
          navEl.classList.remove('activate')
        }else if(window.scrollY < this.scroll){
          navEl.classList.add('activate')
          navEl.classList.remove('deactivate')

          this.scroll = window.scrollY;
        }else{
          navEl.classList.add('deactivate')
          navEl.classList.remove('activate')

          this.scroll = window.scrollY;
        }

    })

  }


  openMenu(){
    let menuEl = this.menu.nativeElement;
    let menuClasses = Array.from(menuEl.classList);

    if(menuClasses.includes('activate')){
      menuEl.classList.remove('activate');
      this.menuColor.nativeElement.setAttribute('src', 'assets/icons/menu-color.svg');
      this.menuWhite.nativeElement.setAttribute('src', 'assets/icons/menu-white.svg');
    }else{
      menuEl.classList.add('activate');
      this.menuColor.nativeElement.setAttribute('src', 'assets/icons/close-color.svg');
      this.menuWhite.nativeElement.setAttribute('src', 'assets/icons/close-white.svg');
    }



  }


}
