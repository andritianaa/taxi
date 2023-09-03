import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit, AfterViewInit {

  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() bookText = '';
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
