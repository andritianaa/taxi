import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

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
