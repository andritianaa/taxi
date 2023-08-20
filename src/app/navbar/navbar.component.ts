import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = false
  toggleNabar(): void {
    if (this.isCollapsed) this.isCollapsed = false
    else this.isCollapsed = true
  }
}
