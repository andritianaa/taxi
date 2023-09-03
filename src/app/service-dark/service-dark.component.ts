import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-service-dark',
  templateUrl: './service-dark.component.html',
  styleUrls: ['./service-dark.component.scss']
})
export class ServiceDarkComponent implements OnInit, AfterViewInit {
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
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() bookText = '';
}
