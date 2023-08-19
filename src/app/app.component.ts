import { AfterViewInit, Component, OnInit } from '@angular/core';
import AOS from "aos";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'taxi';
  isModal = false
  showModal(): void {
    this.isModal = true
  }
  hideModal(): void {
    this.isModal = false
  }


  ngOnInit(): void {
    AOS.init({
      duration: 750,
      delay: 150,
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
