import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  isModal = false
  showModal(): void {
    this.isModal = true
  }
  hideModal(): void {
    this.isModal = false
  }


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
}
