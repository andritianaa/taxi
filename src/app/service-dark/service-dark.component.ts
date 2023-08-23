import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-service-dark',
  templateUrl: './service-dark.component.html',
  styleUrls: ['./service-dark.component.scss']
})
export class ServiceDarkComponent implements OnInit, AfterViewInit {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() bookText = '';



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