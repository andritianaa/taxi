import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {



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
