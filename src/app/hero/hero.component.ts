import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    AOS.init({
      duration: 500,
      delay: 50,
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }


  isModal = false
  showModal(): void {
    this.isModal = true
  }
  hideModal(): void {
    this.isModal = false
  }

}
